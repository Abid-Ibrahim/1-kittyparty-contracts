// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/AccessControl.sol";
import './interfaces/IKeeper.sol';

/// @title Kitty Party State Transition Keeper
contract KittyPartyStateTransitionKeeper is KeeperCompatibleInterface, AccessControl {

    uint blockInterval;
    uint initiatingBlock;
    //Array to store addresses of currently active kitty parties
    address[] public kpControllers;

    //Mapping to identify the current intermediate stage of the party within the Payout Stage
    // 0 - Stop Staking
    // 1 - Pay Organizer Fees
    // 2 - Apply Winner Strategy
    mapping(address => uint8) kpControllerPayoutStage;

    bytes32 public constant SETTER_ROLE = keccak256("SETTER_ROLE");

    constructor() {
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(SETTER_ROLE, msg.sender);
    }

    function setBlockInterval(uint _blockInterval) external onlyRole(SETTER_ROLE) {
        blockInterval = _blockInterval;
    }
    
    ///@dev This function is used to add the address of a new party to the array of kitty party addresses 
    function addKPController(address kpController) external onlyRole(SETTER_ROLE) {
        kpControllers.push(kpController);
    }

    ///@dev Delete by setting the last element to the current index
    function removeKPController(uint256 index) public onlyRole(SETTER_ROLE) {
        kpControllers[index] = kpControllers[kpControllers.length - 1];
        kpControllers.pop();
    }

    function getLength() external view returns (uint256 length) {
        return kpControllers.length;
    }
    
    function checkUpkeep(bytes calldata) external view override returns (bool upkeepNeeded, bytes memory performData) {
        uint256 numberOfParties = kpControllers.length;
        upkeepNeeded = false;

        if (numberOfParties > 0) {
            uint i;
            if (initiatingBlock == 0) {
                i = 0;
            } else {
                i = ((block.number - initiatingBlock) / blockInterval) % numberOfParties;
            }
            address kpController = kpControllers[i];
            if(kpController != address(0)) {
                bytes memory payload = abi.encodeWithSignature("isTransitionRequired()");
                (bool success, bytes memory returnData) = address(kpController).staticcall(payload);
                if(success){
                    (uint8 transitionType) = abi.decode(returnData, (uint8));
                    
                    //Transition is required only if transitionType is not equal to 88 or if there is a pending withdrawal
                    if (transitionType != 88 || kpControllerPayoutStage[kpController]!=0) {
                        upkeepNeeded = true;
                        bytes memory transitionData = abi.encode(transitionType,kpController,i);
                        return (upkeepNeeded, transitionData);
                    }
                }
            }   
        }   
    }

    function performUpkeep(bytes calldata performData) external override {
        (uint8 transitionType, address kpController, uint256 index) = abi.decode(performData, (uint8,address,uint256));
        if (initiatingBlock == 0) {
            initiatingBlock = block.number;
        }
        bytes memory payload;
        if (transitionType == 0) {
            payload = abi.encodeWithSignature("applyInitialVerification()");            
        } else if (transitionType == 1) {
            payload = abi.encodeWithSignature("startStakingMultiRound()");
        } else if (transitionType == 2) {
            payload = abi.encodeWithSignature("stopStaking()");
            kpControllerPayoutStage[kpController] = 1;
        } else if (transitionType == 88 && kpControllerPayoutStage[kpController]!=0) {  
            if (kpControllerPayoutStage[kpController] == 1) {
                payload = abi.encodeWithSignature("payOrganizerFees()");
                kpControllerPayoutStage[kpController] = 2;
            } else if (kpControllerPayoutStage[kpController] == 2) {
                payload = abi.encodeWithSignature("applyWinnerStrategy()");
                kpControllerPayoutStage[kpController] = 0;
            }
        } else if (transitionType == 3) {
            payload = abi.encodeWithSignature("startNextRound()");           
        } else if (transitionType == 4) {
            payload = abi.encodeWithSignature("applyCompleteParty()");
            removeKPController(index);
        }
        
        (bool success,) = address(kpController).call(payload);
        require(success);
    }
}
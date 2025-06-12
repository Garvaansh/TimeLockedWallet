// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TimeLockedWallet {
    struct Lock {
        uint amount;
        uint unlockTime;
    }

    mapping(address => Lock) public locks;

    function lockFunds(uint _timeInSeconds) public payable {
        require(msg.value > 0, "Send some Ether to lock");
        require(_timeInSeconds >= 60, "Lock time must be at least 1 minute");
        require(locks[msg.sender].amount == 0, "You already have a lock");

        locks[msg.sender] = Lock({
            amount: msg.value,
            unlockTime: block.timestamp + _timeInSeconds
        });
    }


    function withdraw() public {
        Lock memory userLock = locks[msg.sender];
        require(userLock.amount > 0, "No funds locked");
        require(block.timestamp >= userLock.unlockTime, "Lock period not over");

        uint amount = userLock.amount;
        locks[msg.sender] = Lock(0, 0); // Reset lock
        payable(msg.sender).transfer(amount);
    }

    function getLockDetails() public view returns (uint, uint) {
        Lock memory userLock = locks[msg.sender];
        return (userLock.amount, userLock.unlockTime);
    }
}

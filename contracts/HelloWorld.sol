//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract HelloWorld {
    event messageChanged(string oldMsg, string newMsg);

    string public message;

    constructor(string memory firstMessage) {
        message = firstMessage;
    }

    function update( string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;

        emit messageChanged(oldMsg, newMessage);
    }
}
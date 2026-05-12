// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract MyToken {
    string public name;
    string public symbol;
    uint8 public decimals;
    uint256 public totalSupply;
    address public creator;

    mapping(address => uint256) public balances;

    constructor(
        string memory _name,
        string memory _symbol,
        uint8 _decimals,
        uint256 _initialSupply
    ) {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        creator = msg.sender;

        totalSupply = _initialSupply;
        balances[creator] = _initialSupply;
    }

    function balanceOf(address user) public view returns (uint256) {
        return balances[user];
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(balances[msg.sender] >= amount, "Not enough tokens");

        balances[msg.sender] -= amount;
        balances[recipient] += amount;
        return true;
    }

    function mint(address recipient, uint256 amount) public {
        require(msg.sender == creator, "Only creator can mint");

        totalSupply += amount;
        balances[recipient] += amount;
    }
}
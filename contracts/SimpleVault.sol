// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimpleVault is Ownable {
    uint256 public unlockTime;

    constructor() {
        unlockTime = block.timestamp + 180 days;
    }

    receive() external payable {}

    function withdrawAll(address payable to, address[] calldata tokens) external onlyOwner {
        require(block.timestamp >= unlockTime, "Vault is still locked");

        uint256 ethBal = address(this).balance;
        if (ethBal > 0) {
            to.transfer(ethBal);
        }

        for (uint i = 0; i < tokens.length; i++) {
            IERC20 token = IERC20(tokens[i]);
            uint256 bal = token.balanceOf(address(this));
            if (bal > 0) {
                token.transfer(to, bal);
            }
        }
    }

    function timeLeft() external view returns (uint256) {
        return block.timestamp >= unlockTime ? 0 : unlockTime - block.timestamp;
    }
}
const { ethers } = require("ethers");

// ======= CONFIG =======
const RPC_URL = "https://sepolia.base.org"; // or BNB testnet URL
const PRIVATE_KEY = "YOUR_PRIVATE_KEY";     // Wallet that owns the contract
const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";
const TO_ADDRESS = "YOUR_WITHDRAWAL_ADDRESS";
const TOKEN_ADDRESSES = [
  // Add token addresses or leave empty if only withdrawing ETH
  // "0xTokenAddress1",
  // "0xTokenAddress2"
];
// =======================

const ABI = [
  "function withdrawAll(address to, address[] calldata tokens) external",
  "function timeLeft() external view returns (uint256)"
];

async function main() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

  const timeLeft = await contract.timeLeft();
  console.log("⏳ Time Left (sec):", timeLeft.toString());

  if (timeLeft > 0) {
    console.log("❌ Vault is still locked.");
    return;
  }

  console.log("🔓 Unlock time passed. Withdrawing...");
  const tx = await contract.withdrawAll(TO_ADDRESS, TOKEN_ADDRESSES);
  console.log("📤 Withdrawal tx sent:", tx.hash);

  const receipt = await tx.wait();
  console.log("✅ Transaction confirmed in block:", receipt.blockNumber);
}

main().catch((err) => {
  console.error("⚠️ Error:", err);
});
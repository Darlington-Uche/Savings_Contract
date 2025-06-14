
# 🏦 Savings Contract

A simple Ethereum smart contract that lets users deposit and withdraw ERC-20 tokens (or Ether), tracking individual and total balances, with owner permissions to update token settings.

---

## 🔧 Features

- Users can **deposit** and **withdraw** tokens securely.
- **Per-user balance** tracking and **total contract balance**.
- **Ownable** access control for owner-only functions.
- Tested with **Hardhat** and **TypeScript**.
- Compatible with ERC‑20 tokens (or ETH, if wrapped).

---

## 📁 Repository Structure

. ├── contracts/             # Solidity smart contracts │   └── SavingsContract.sol ├── scripts/               # Deployment scripts │   └── deploy.ts ├── test/                  # Unit tests (Hardhat + Mocha/Chai) ├── hardhat.config.ts      # Hardhat config ├── package.json └── tsconfig.json

---

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install

2. Compile contracts

npx hardhat compile


3. Run tests

npx hardhat test


4. Deploy (e.g., to local network)

npx hardhat run scripts/deploy.ts --network localhost




---

📜 Contract: SavingsContract.sol

Constructor

constructor(address _tokenAddress, address _initialOwner)

_tokenAddress: ERC‑20 token to use (or zero to accept ETH).

_initialOwner: Sets the contract owner.


deposit(uint256 _amount)

Deposits _amount of the token into the contract.

Emits Deposit event.


withdraw(uint256 _amount)

Withdraws up to the user’s balance.

Emits Withdraw event.


getBalance(address _user) → uint256

Returns a user's deposited balance.

totalBalance() → uint256

Owner-only; returns total tokens held.

setToken(address _newTokenAddress)

Owner-only; update token address for deposits/withdrawals.


---

🧪 Testing

Written in TypeScript using Hardhat + Mocha/Chai.

Covers deposit, withdrawal, ownership, edge cases.

(Suggest adding tests for failure cases, e.g. withdrawing more than balance, deposits of zero.)



---

✅ Usage & Recommendations

Review and test thoroughly before deployment.

Consider:

Handling Ether vs token deposits explicitly.

Adding ownership renounce/transfer methods.

Guarding against ERC‑20 reentrancy if needed.

Auditing edge cases (e.g. token contract behavior, integer overflow/underflow).




---

✨ Improvements

Access control via OpenZeppelin’s Ownable pattern.

Add Pausable or a withdrawal delay mechanism.

Integrate with Compound/DeFi for yield earning (see similar patterns)  .

Provide a migration or versioning strategy.



---

👨‍💻 Running Locally

git clone <repo-url>
cd Savings_Contract
npm install
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.ts --network localhost


---

📄 License

Specify your license here (e.g., MIT).


---

✅ Quick Review Summary

Aspect	Status & Suggestions

Code Structure	Clear and modular
Functionality	Deposit/withdraw ✅
Tests	Present, can be extended
Access Control	Owner-only functions included
Documentation	Proposed here improves clarity
Security	Basic protection OK; add Ether-vs-token handling, reentrancy guards, deeper testing



---

✅ Final Thoughts

Your core functionality is solid and well-organized. Adding a few more tests, handling edge cases, and enhancing security (e.g., pausing, reentrancy protection) would make it production-ready. The README above should help others onboard quickly and understand your project clearly.

Let me know if you'd like help integrating any enhancements or adding examples!


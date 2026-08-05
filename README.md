# 🚀 Fungible Token System (Web3 dApp)

<div align="center">

![Blockchain](https://img.shields.io/badge/Blockchain-Web3-blueviolet?style=for-the-badge)
![Solidity](https://img.shields.io/badge/Solidity-Smart%20Contracts-black?style=for-the-badge&logo=solidity)
![React](https://img.shields.io/badge/React-Frontend-61dafb?style=for-the-badge&logo=react)
![Hardhat](https://img.shields.io/badge/Hardhat-Ethereum%20Development-f7df1e?style=for-the-badge)
![Ethers.js](https://img.shields.io/badge/Ethers.js-Web3%20Library-3c3c3d?style=for-the-badge)
![MetaMask](https://img.shields.io/badge/MetaMask-Wallet-orange?style=for-the-badge&logo=metamask)

### 🔗 A Full Stack Blockchain-Based Fungible Token dApp

</div>

---

# 📌 Project Overview

This project is a Blockchain-powered Fungible Token System inspired by ERC-20 token standards. It enables users to securely transfer tokens, check balances, connect wallets through MetaMask, and allows the admin to mint new tokens.

The project demonstrates how smart contracts interact with a modern frontend application using React + Ethers.js, creating a real-world decentralized application (dApp).

---

# ✨ Features

## 🔐 Wallet Integration
- Connect MetaMask wallet
- Authenticate users through blockchain wallets
- Real-time account detection

## 💰 Token Management
- View token balances
- Transfer tokens securely
- Track total token supply
- Mint new tokens (Admin only)

## ⚡ Smart Contract Functionalities
- Fungible token creation
- Secure transaction handling
- Role-based access control
- Blockchain state management

## 🎨 Interactive Frontend
- React-based responsive UI
- Dynamic balance updates
- Real-time blockchain interaction
- User-friendly transaction system

---

# 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Solidity | Smart Contract Development |
| Hardhat | Local Blockchain & Deployment |
| React.js | Frontend Development |
| Vite | React Build Tool |
| Ethers.js | Smart Contract Interaction |
| MetaMask | Wallet Integration |
| JavaScript | Frontend Logic |
| HTML/CSS | UI Design |

---

# 🧱 System Architecture

```text
┌────────────────────┐
│    React Frontend  │
│  (User Interface)  │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│     Ethers.js      │
│Contract Interaction│
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│   Smart Contract   │
│     Solidity       │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Ethereum Blockchain│
│      Hardhat       │
└────────────────────┘
```

---

# ⚙️ Core Functionalities

## ✅ Connect Wallet
Users can connect their MetaMask wallet and interact with the blockchain securely.

## ✅ Check Balance
Displays real-time token balance of the connected wallet.

## ✅ Transfer Tokens
Allows peer-to-peer token transfers between blockchain addresses.

## ✅ Mint Tokens
Admin can generate new tokens dynamically.

## ✅ Total Supply Tracking
Tracks total number of tokens existing in the ecosystem.

---

# 📂 Project Structure

```bash
Fungible-Token-System/
│
├── contracts/
│   └── MyToken.sol
│
├── scripts/
│   └── deploy.js
│
├── frontend-react/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── style.css
│   └── package.json
│
├── hardhat.config.js
└── README.md
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone <your-repository-link>
cd Fungible-Token-System
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Start Hardhat Local Blockchain

```bash
npx hardhat node
```

---

## 4️⃣ Deploy Smart Contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```

Copy the deployed contract address and paste it inside:

```bash
frontend-react/src/App.jsx
```

---

## 5️⃣ Run React Frontend

```bash
cd frontend-react
npm install
npm run dev
```

---

# 🦊 MetaMask Setup

## Add Hardhat Network

| Field | Value |
|---|---|
| Network Name | Hardhat Local |
| RPC URL | http://127.0.0.1:8545 |
| Chain ID | 31337 |
| Currency Symbol | ETH |

---

## Import Hardhat Account

Copy any private key from Hardhat terminal and import it into MetaMask.

---


# 📈 Future Enhancements

- 🌍 Deploy on Sepolia Testnet
- 📊 Transaction History Dashboard
- 🔔 Real-time Notifications
- 📱 Mobile Responsive Design
- 🎨 Advanced UI/UX Improvements
- 🔐 Enhanced Smart Contract Security

---

# 🧠 Key Learnings

Through this project, I gained hands-on experience with:

- Smart contract development using Solidity
- Blockchain deployment using Hardhat
- Wallet integration with MetaMask
- Web3 frontend integration using Ethers.js
- Building decentralized applications (dApps)
- Managing blockchain transactions and state

---

# 💼 Why This Project Matters

This project demonstrates:

✅ Full Stack Web3 Development
✅ Smart Contract Integration
✅ Blockchain Fundamentals
✅ Frontend + Blockchain Communication
✅ Real-world dApp Development Skills

---

# 👨‍💻 Author

## Sk Shanu

🎓 B.Tech CSE Student
💻 Aspiring Blockchain & Cybersecurity Developer
🚀 Passionate about Web3 & Decentralized Technologies

### 🔗 Connect With Me

- GitHub: https://github.com/shanu454
- LinkedIn: www.linkedin.com/in/sk-shanu-81-01z

---

# ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

---

<div align="center">

### 🚀 Building the Future with Blockchain & Web3

</div>

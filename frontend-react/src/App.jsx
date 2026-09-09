import { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "PASTE_YOUR_CONTRACT_ADDRESS";

const abi = [
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address,uint256) returns (bool)"
];

function App() {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("0");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  let provider, signer, contract;

  // 🔗 Connect Wallet
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Install MetaMask!");
        return;
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });

      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      contract = new ethers.Contract(contractAddress, abi, signer);

      const addr = await signer.getAddress();
      setAccount(addr);

      const bal = await contract.balanceOf(addr);
      setBalance(ethers.formatEther(bal));

      setStatus("✅ Wallet connected");
    } catch (err) {
      setStatus("❌ " + err.message);
    }
  };

  // 🔁 Transfer
  const sendTokens = async () => {
    try {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      contract = new ethers.Contract(contractAddress, abi, signer);

      setStatus("⏳ Processing...");

      const tx = await contract.transfer(
        to,
        ethers.parseEther(amount)
      );

      await tx.wait();

      const bal = await contract.balanceOf(account);
      setBalance(ethers.formatEther(bal));

      setStatus("✅ Transfer successful");
    } catch (err) {
      setStatus("❌ " + err.message);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>EduCoin (EDU)</h1>

      <button onClick={connectWallet}>Connect Wallet</button>

      <p>{account}</p>

      <h3>Balance</h3>
      <p>{balance} EDU</p>

      <h3>Transfer Tokens</h3>
      <input
        placeholder="Recipient"
        onChange={(e) => setTo(e.target.value)}
      />
      <input
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <button onClick={sendTokens}>Send</button>

      <p>{status}</p>
    </div>
  );
}

export default App;
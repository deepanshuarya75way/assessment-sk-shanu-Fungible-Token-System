import { useState } from "react";
import { ethers } from "ethers";
import { FeeData } from "ethers";

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
  const [gasEstimate, setGasEstimate] = useState("");
  const [gasWarning, setGasWarning] = useState("");
  const [pendingTx, setPendingTx] = useState(null);

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
      if(!window.ehtereum){
        setStatus("Please install MetaMask");
        return;
      }
      if(!to || !amount){
        setStatus("Please enter recipient and amount");
        return;
      }
      if(!ethers.isAddress(to)){
        setStatus("Invalid recipient address");
        return;
      }
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      contract = new ethers.Contract(contractAddress, abi, signer);
      setStatus("Estimating gas...")
      setGasEstimate("");
      setGasWarning("");
      const tokenAmount = ethers.parseEther(amount);
      const estimatedGas = await provider.getFeeData();
      const gasPrice = FeeData.maxFeePerGas ?? feeData.gasPrice;
      if(!gasPrice){
        throw new Error("Unable to determine current gas price");
      }
      const estimatedFee = estimatedGas * gasPrice;
      const formattedFee = ethers.formatEther(estimatedFee);
      setGasEstimate(`${estimatedGas.toString()} gas = ${formattedFee} ETH`);
      if(estimatedGas > 100000n){
        setGasWarning("Gas estimate is usually high. Please review the transaction.");
        setStatus("High gas estimate");
        return;
      }
      const confirmed = window.confirm(`Estimated gas: ${estimatedGas.toString()}\n` + `Estimated fee: ${formattedFee} ETH\n\n` + `Do you want to continue?`);
      if(!confirmed){
        setStatus("Transaction cancelled");
        return;
      }
      setStatus("Sending transaction...");
      const tx = await contract.transfer( to, tokenAmount);
      setPendingTx(tx.hash);
      setStatus("Waiting for confirmation...");
      await tx.wait();
      const bal = await contract.balanceOf(account);
      setBalance(ethers.formatEther(bal));
      setStatus("Transfer successful");
      setPendingTx(null);
    }
    catch(err){
      console.error(err);
      if(err.code === "CALL_EXCEPTION"){
        setStatus("Gas estimation failed. Check yout token balance, recipient address, and contract state.");
      }
      else if(err.code === "ACTION_REJECTED"){
        setStatus("Transaction rejected by user");
      }
      else{
        setStatus("Failed" + (err.reason || err.message));
      }
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
      {gasEstimate && (
        <p> 
          Estimated Gas: {gasEstimate} 
        </p>
      )}
      {gasWarning && (
        <p>
          {gasWarning}
        </p>
      )}
      {pendingTx && (
        <p>
          Transaction Hash: {pendingTx}
        </p>
      )}

      <p>{status}</p>
    </div>
  );
}

export default App;
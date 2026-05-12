const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

// Minimal ABI
const abi = [
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address,uint256) returns (bool)",
  "function totalSupply() view returns (uint256)"
];

let provider, signer, contract;

const connectBtn = document.getElementById("connectBtn");
const accountEl = document.getElementById("account");
const balanceEl = document.getElementById("balance");
const statusEl = document.getElementById("status");

// 🔗 Connect Wallet (FIXED)
connectBtn.onclick = async () => {
  try {
    // ✅ Check MetaMask
    if (!window.ethereum) {
      alert("MetaMask not detected! Please install it.");
      return;
    }

    // ✅ Request account access
    await window.ethereum.request({ method: "eth_requestAccounts" });

    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    // ✅ Check network (IMPORTANT)
    const network = await provider.getNetwork();
    if (network.chainId !== 31337n) {
      statusEl.innerText = "❌ Switch MetaMask to Hardhat Local network!";
      return;
    }

    // ✅ Connect contract
    contract = new ethers.Contract(contractAddress, abi, signer);

    const address = await signer.getAddress();
    accountEl.innerText = "Connected: " + address;

    statusEl.innerText = "✅ Wallet connected";

    await updateBalance();

  } catch (err) {
    console.error(err);
    statusEl.innerText = "❌ Error: " + err.message;
  }
};

// 💰 Get Balance
async function updateBalance() {
  try {
    const address = await signer.getAddress();
    const balance = await contract.balanceOf(address);
    balanceEl.innerText = ethers.formatEther(balance) + " EDU";
  } catch (err) {
    console.error(err);
    statusEl.innerText = "❌ Error fetching balance";
  }
}

// 🔁 Transfer
document.getElementById("sendBtn").onclick = async () => {
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  try {
    // ✅ Validate input
    if (!ethers.isAddress(to)) {
      statusEl.innerText = "❌ Invalid address";
      return;
    }

    if (!amount || amount <= 0) {
      statusEl.innerText = "❌ Enter valid amount";
      return;
    }

    statusEl.innerText = "⏳ Processing transaction...";

    const tx = await contract.transfer(to, ethers.parseEther(amount));
    await tx.wait();

    statusEl.innerText = "✅ Transfer successful!";
    await updateBalance();

  } catch (err) {
    console.error(err);
    statusEl.innerText = "❌ Error: " + (err.reason || err.message);
  }
};
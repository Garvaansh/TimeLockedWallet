const contractAddress = "0x9908dbe9317e7c626047179b43c086dd4abdef49";
const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_timeInSeconds",
        "type": "uint256"
      }
    ],
    "name": "lockFunds",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

let provider, signer, contract;

async function connectWallet() {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
  } else {
    alert("⚠️ Please install MetaMask!");
  }
}

async function lockFunds() {
  try {
    await connectWallet();
    const time = document.getElementById("lockTime").value;
    const amount = document.getElementById("amount").value;
    const tx = await contract.lockFunds(time, {
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait();
    alert("✅ Funds locked!");
  } catch (error) {
    console.error(error);
    alert("❌ Lock failed. Check console.");
  }
}

async function withdrawFunds() {
  try {
    await connectWallet();
    const tx = await contract.withdraw();
    await tx.wait();
    alert("✅ Funds withdrawn!");
  } catch (error) {
    console.error(error);
    alert("❌ Withdraw failed. Check if lock period is over.");
  }
}

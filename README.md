# ⏳ TimeLockedWallet

A clean and minimal DApp that allows users to lock their funds for a chosen duration and withdraw them only after the lock period expires — without relying on any third party.

---

## 🔐 Project Description

**TimeLockedWallet** is a smart contract built on the Core Testnet2 that helps users create self-custody, time-based vaults. It ensures that funds can only be withdrawn once the specified time has passed.

---

## 🚀 Vision

To empower individuals with a trustless mechanism to lock funds and ensure delayed access — useful for savings, commitments, or time-restricted access cases.

---

## ⚙️ Key Features

- ⏱ Lock funds for a user-defined time duration  
- 🔓 Withdraw only after the lock expires  
- 🔍 Easy-to-check lock status via UI  

---

## 🖥️ User Interface Preview

A simple web-based UI to interact with the smart contract:

![image](https://github.com/user-attachments/assets/e66c3476-6d32-4770-8f6a-73df4ecfda67)


- Left input: Amount in wei (e.g., `1000000000000000000` for 1 ETH)
- Right input: Lock time in seconds (e.g., `60` for 1 minute)
- Buttons:
  - `Lock Funds`: Locks the entered amount for the given time
  - `Withdraw Funds`: Attempts withdrawal if unlock time has passed

---

## 📄 Smart Contract Details

- **Contract Address:**  
  [`0x9908dbe9317e7c626047179b43c086dd4abdef49`](https://scan.test2.btcs.network/address/0x9908dbe9317e7c626047179b43c086dd4abdef49)

- **Deployed on:**  
  Core Testnet2  
  [🔗 View on Explorer](https://scan.test2.btcs.network/)

---

## 📸 Transaction Screenshot

![image](https://github.com/user-attachments/assets/dd34260d-1e5a-421b-8d7b-c870dd3ded00)


---

## 🔮 Future Scope

- 🪙 Support ERC20 tokens  
- 👥 Assign fund beneficiaries  
- 🔐 Add admin unlock/recovery features  
- 📱 Improve UI responsiveness for mobile  


---

## ✅ How to Use

1. Connect MetaMask with Core Testnet2
2. Fund wallet using [Core Faucet](https://scan.test2.btcs.network/faucet)
3. Open `index.html` in browser (or deploy on GitHub Pages / Netlify)
4. Use the UI to lock and withdraw funds

---

Feel free to contribute, fork, or build upon this starter DApp 🚀


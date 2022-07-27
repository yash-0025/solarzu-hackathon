export const solarzuAddress = "0x45F10504f655a38aEa0dC178a353b7038EdCe4b3";

export const abi = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "total_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "instalment_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "instalments",
          "type": "uint8"
        }
      ],
      "name": "BNPL",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "instalment_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8",
          "name": "instalments_left",
          "type": "uint8"
        }
      ],
      "name": "INSTALMENT_PAID",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "total_amount",
          "type": "uint256"
        },
        {
          "internalType": "uint8",
          "name": "instalments",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_instalment_amount",
          "type": "uint256"
        }
      ],
      "name": "divide_installments",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "instalments_amount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "instalments_left",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "repayment",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "used_amount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ] 
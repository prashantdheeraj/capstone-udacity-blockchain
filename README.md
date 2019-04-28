# Project Background and Scope
At present, property titles are often paper-based, creating opportunities for errors and fraud. Title professionals find defects in 25% of all titles during the transaction process, according to the American Land Title Association.

Any identified defect makes it illegal to transfer a property title to a buyer until it is rectified. This means property owners often incur high legal fees to ensure authenticity and accuracy of their property titles.

These title management issues could potentially be mitigated by using blockchain technology to build immutable digital records of land titles and using blockchain for transparent transactions. This approach could simplify property title management, making it more transparent and helping to reduce the risk of title fraud and the need for additional insurance.

# Project Setup
1. Clone the project repository at https://github.com/udacity/Blockchain-Capstone
2. Get to the project folder and install dependencies. Get inside the eth-contract folder and again install dependencies for the contract
```
npm install
cd eth-contract
npm install 
```
3. Fill out ERC721 Mintable Contract 
4. Install  Zokrates
```
docker run -v C:/Users/pdheeraj/Documents/udacity-blockchain/Projects/Blockchain-Capstone-master/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash
```
5. Write test contract for ZK and ERC721 integration
6. Compile on  ganache
7. test locally on ganache
8. On successful testing  deploy on rinkeby
```
truffle compile
truffle migrate --reset --network rinkeby
```
9. Mint 10 tokens using myetherwallet.
10. Generate a storefront using opense

# Projet Testing
test the projetc using follwing commands
```
truffle test './test/TestERC721Mintable.js'
truffle test './test/TestSquareVerifier.js'
truffle test './test/TestSolnSquareVerifier.js'
```
Results:
ERC721:
```
 - solc: 0.5.2+commit.1df8f40c.Emscripten.clang



  Contract: TestERC721Mintable
    match erc721 spec
      √ should return total supply
      √ should get token balance (43ms)
      √ should return token uri (41ms)
      √ should transfer token from one owner to another (127ms)
    have ownership properties
      √ should fail when minting when address is not contract owner (73ms)
      √ should return contract owner


  6 passing (7s)
```

Square Verifier
```
Compiled successfully using:
   - solc: 0.5.2+commit.1df8f40c.Emscripten.clang



  Contract: Verifier
The result is :true
    √ VerifyTx returns true with correct proof (3367ms)
The result isfalse
    √ VerifyTx returns false with incorrect proof (1782ms)


  2 passing (6s)
```


SolnSquareVerifier:
```
> Compiled successfully using:
   - solc: 0.5.2+commit.1df8f40c.Emscripten.clang



  Contract: SolnSquareVerifier
    √ Can add new solution for contract (121ms)
    √ Can mint token (2474ms)
2 passing (6s)
```

# rinkeby Deployment log
> Compiled successfully using:
   - solc: 0.5.2+commit.1df8f40c.Emscripten.clang


Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x6b01da


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.254280412
   > gas used:            258162
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000516324 ETH

   -------------------------------------
   > Total cost:         0.000516324 ETH


2_contract_deployment.js
========================

   Deploying 'Verifier'
   --------------------
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.250677408
   > gas used:            1774474
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.003548948 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.241725274
   > gas used:            4476067
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.008952134 ETH

   -------------------------------------
   > Total cost:         0.012501082 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.013017406 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6af353


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x9d997cadbb6cc976fb500652778dea532e719cfcfc5903027af90ae5aa676795
   > Blocks: 1            Seconds: 25
   > contract address:    0x8A821fe934af1E247669bC1E20191E25EFb75011
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.249333496
   > gas used:            273162
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00546324 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00546324 ETH


2_contract_deployment.js
========================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x58b2a9431ed255d48b33e5193c4f76cde0dbcc047ed1c633440eefe89a984337
   > Blocks: 1            Seconds: 13
   > contract address:    0x7583Bc2d48a5cC9b1b484fb7f6554C0357f080Cd
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.213003456
   > gas used:            1774474
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03548948 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x9277743a2e756b1734828fc311349a8ad3501566f466ca30952c8bbc1f93787c
   > Blocks: 2            Seconds: 29
   > contract address:    0x4c9D11ec7e397A35b68c4f87dA70143A4B41dcb1
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.119678116
   > gas used:            4666267
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.09332534 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.12881482 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.13427806 ETH


# Mint Token
Go To following link.
https://myetherwallet.com/interface/interact-with-contract 

follwing info will be required.

Contract Address for SolnSquareVerifier: 0x4c9D11ec7e397A35b68c4f87dA70143A4B41dcb1


Abi: go to the SolnSquareVerifier.json in the build/contract folder and take the value of abi
```
 [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x01ffc9a7"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x06fdde03"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "approved",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x081812fc"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x095ea7b3"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x18160ddd"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x23b872dd"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x27dc297e"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x2f745c59"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        },
        {
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x38bbfa50"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x3f4ba83a"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x40c10f19"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x42842e0e"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x4f6ccce7"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x6352211e"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x70a08231"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8456cb59"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x8da5cb5b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0x95d89b41"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xa22cb465"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb88d4fde"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xc87b56dd"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd547cfb7"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xe985e9c5"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xf2fde38b"
    },
    {
      "inputs": [
        {
          "name": "verifierContractAddress",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor",
      "signature": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "index",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "solver",
          "type": "address"
        }
      ],
      "name": "SolutionAdded",
      "type": "event",
      "signature": "0x078793128cefb19aac38a33f9e5df39f67716907f6d747e8065545699e0b2b8d"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event",
      "signature": "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event",
      "signature": "0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event",
      "signature": "0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event",
      "signature": "0x04dba622d284ed0014ee4b9a6a68386be1a4c08a4913ae272de89199cc686163"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "name": "a_p",
          "type": "uint256[2]"
        },
        {
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "name": "b_p",
          "type": "uint256[2]"
        },
        {
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "name": "c_p",
          "type": "uint256[2]"
        },
        {
          "name": "h",
          "type": "uint256[2]"
        },
        {
          "name": "k",
          "type": "uint256[2]"
        },
        {
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "hash",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function",
      "signature": "0x402ac660"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        },
        {
          "name": "solver",
          "type": "address"
        },
        {
          "name": "solutionHash",
          "type": "bytes32"
        }
      ],
      "name": "addSolution",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0xb3b72007"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "name": "a_p",
          "type": "uint256[2]"
        },
        {
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "name": "b_p",
          "type": "uint256[2]"
        },
        {
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "name": "c_p",
          "type": "uint256[2]"
        },
        {
          "name": "h",
          "type": "uint256[2]"
        },
        {
          "name": "k",
          "type": "uint256[2]"
        },
        {
          "name": "input",
          "type": "uint256[2]"
        }
      ],
      "name": "mintNewToken",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x731c36ba"
    }
  ]
  ```
  In the next screen select mint function and mint 10 tokens. You have to confirm using metamask. 
  follwing info was provided
  contract owner address: 0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
  token minted to: 0xE8318Da70e75fce4E9Bf8578c3D7cF82092972fD

# Create storeFront
Create a storefron by lisitng on opensea for rinkeby
https://rinkeby.opensea.io/get-listed/step-two

Name of StoreFront: https://rinkeby.opensea.io/category/decentralizedhousinglistingtokenv4


# Listing of 5 tokens: 

Listed by : 0xE8318Da70e75fce4E9Bf8578c3D7cF82092972fD
Floating House: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/5
Manufacturing House: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/3
Luxury home: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/2
Cozy Family home: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/1
small Condo: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/4

# Purchase of token : 
purchased by: 0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
small Condo: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/4
Manufacturing House: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/3
Luxury home: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/2
Floating House: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/5
Cozy Family home: https://rinkeby.opensea.io/assets/0x4c9d11ec7e397a35b68c4f87da70143a4b41dcb1/1






# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


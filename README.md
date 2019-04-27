# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)


# Installing zOkrates
docker run -v C:/Users/pdheeraj/Documents/udacity-blockchain/Projects/Blockchain-Capstone-master/zokrates/code:/home/zokrates/code -ti zokrates/zokrates /bin/bash

# deployment log

Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 0x6ae3c8


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.488970771
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
   > balance:             8.485367767
   > gas used:            1774474
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.003548948 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.476666941
   > gas used:            4350413
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.008700826 ETH

   -------------------------------------
   > Total cost:         0.012249774 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.012766098 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6ad22f


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xef67109dae897f3a974401fe7b03e61561db372ae584c5baabb3886ea38757e0
   > Blocks: 1            Seconds: 25
   > contract address:    0x79627B19a2f89A6a80ECC0BC6a4b7c5987901A4B
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.484023855
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
   > transaction hash:    0x5b34aa1e3513db854f9c91f08ebc161f55cfb0c54e1caceec1d12c509ddf1815
   > Blocks: 2            Seconds: 17
   > contract address:    0x178D5ec03756F5EA16EAa86a6Bb7B6361236f01A
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.447693815
   > gas used:            1774474
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03548948 ETH


   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xf3d3e33da56cc6579b6fbff9742f8adddd18b3d430286f82ffa0e31f4e6d2051
   > Blocks: 1            Seconds: 29
   > contract address:    0x37C0be12Ad2C662f381D6A98939EeBe3EC1aCECc
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.357781555
   > gas used:            4495613
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.08991226 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.12540174 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.13086498 ETH



# Mint Token
https://myetherwallet.com/interface/interact-with-contract 

contract owner: 0x1213eA0da8B016978E37Bf93CECF66eA2f155A74

token minted to: 0xE8318Da70e75fce4E9Bf8578c3D7cF82092972fD

# Create storeFront
https://rinkeby.opensea.io/get-listed/step-two



# Listing of 5 tokens: 

Listed by : 0xE8318Da70e75fce4E9Bf8578c3D7cF82092972fD
Floating House: https://rinkeby.opensea.io/assets/0x37c0be12ad2c662f381d6a98939eebe3ec1acecc/5
Manufacturing House: https://rinkeby.opensea.io/assets/0x37c0be12ad2c662f381d6a98939eebe3ec1acecc/3
Luxury home: https://rinkeby.opensea.io/assets/0x37c0be12ad2c662f381d6a98939eebe3ec1acecc/2
Cozy Family home: https://rinkeby.opensea.io/assets/0x37c0be12ad2c662f381d6a98939eebe3ec1acecc/1
Decentralized Housing Listing Token V3 #9: https://rinkeby.opensea.io/assets/0x37c0be12ad2c662f381d6a98939eebe3ec1acecc/9

# Purchase of token : 
purchased by: 0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
Cozy House: https://rinkeby.opensea.io/assets/0x37c0be12ad2c662f381d6a98939eebe3ec1acecc/1


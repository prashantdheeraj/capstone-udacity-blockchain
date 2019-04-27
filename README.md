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
> Block gas limit: 0x6c45b1


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.757732518
   > gas used:            258162
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.000516324 ETH

   -------------------------------------
   > Total cost:         0.000516324 ETH


2_contract_deployment.js
========================

   Replacing 'Verifier'
   --------------------
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.754129514
   > gas used:            1774474
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.003548948 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.745417444
   > gas used:            4356035
   > gas price:           2 gwei
   > value sent:          0 ETH
   > total cost:          0.00871207 ETH

   -------------------------------------
   > Total cost:         0.012261018 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.012777342 ETH


Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 0x6c7e1d


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0x71e06dbbb6397a6877c5be54ca55d19fab5a05e4ae50eda4caacbb9bb460cae2
   > Blocks: 3            Seconds: 37
   > contract address:    0x9F3aB816112e1C0Ed9E69c9836C93B6a3B051fc1
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.752785602
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

   Replacing 'Verifier'
   --------------------
   > transaction hash:    0x2aec68c495b9bbd69ebaf3cf8d66e9a819a495cab0ccd17cd319cde8081598f5
   > Blocks: 2            Seconds: 17
   > contract address:    0x5E2893e68Fe4b29dFcC62c538c593002Df86C8C9
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.716455562
   > gas used:            1774474
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.03548948 ETH


   Replacing 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xec45533f33bf079b50bd0426fb71e18d1fc15552213e4869e84665d4f4cd89d4
   > Blocks: 2            Seconds: 17
   > contract address:    0xe38F37Cd6ad250bb8F8810418cA717e6Eeb741C7
   > account:             0x1213eA0da8B016978E37Bf93CECF66eA2f155A74
   > balance:             8.625530862
   > gas used:            4546235
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0909247 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.12641418 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.13187742 ETH


# Mint Token
https://myetherwallet.com/interface/interact-with-contract .

# Create storeFront
https://rinkeby.opensea.io/get-listed/step-two
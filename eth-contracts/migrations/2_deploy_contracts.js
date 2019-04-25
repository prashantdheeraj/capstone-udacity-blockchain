// migrating the appropriate contracts
var SquareVerifier = artifacts.require("./Verifier.sol");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");
// const fs = require('fs')
// const path = require('path')
// const proofs = require('../../zokrates/code/square/proofs.json')

module.exports = function(deployer) {
  deployer.deploy(SquareVerifier);
  deployer.deploy(SolnSquareVerifier,SquareVerifier.address);
};

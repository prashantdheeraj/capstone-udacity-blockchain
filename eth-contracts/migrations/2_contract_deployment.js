const Verifier = artifacts.require('./Verifier.sol')
const SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol')


module.exports = function (deployer) {
  deployer.deploy(Verifier)
    .then(instance => {
      return deployer.deploy(SolnSquareVerifier, Verifier.address)
    })
}

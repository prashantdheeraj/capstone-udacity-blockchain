const Verifier = artifacts.require('./Verifier.sol')
const SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol')


module.exports = function (deployer, accounts) {
  //const minter = accounts[1]
  //console.log(accounts[1])
  deployer.deploy(Verifier)
    .then(() => {
      return deployer.deploy(SolnSquareVerifier, Verifier.address)
        // .then(async (instance) => {
        //   try {
        //     instance.mint(accounts[1], 0)
        //     instance.mint(accounts[1], 1)
        //     instance.mint(accounts[1], 2)
        //     instance.mint(accounts[1], 3)
        //     instance.mint(accounts[1], 4)
        //     instance.mint(accounts[1], 5)
        //     instance.mint(accounts[1], 6)
        //     instance.mint(accounts[1], 7)
        //     instance.mint(accounts[1], 8)
        //     instance.mint(accounts[1], 9)

        //    // console.log("the tokens are " + tx);

        //   } catch(error){
        //     console.log("the error is " + error);
        //   }
          
        // })
    })
}

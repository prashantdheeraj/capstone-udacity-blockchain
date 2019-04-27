const SolnSquareVerifier = artifacts.require('SolnSquareVerifier')
const Verifier = artifacts.require('Verifier')
const truffleAssert = require('truffle-assertions')


contract('SolnSquareVerifier', accounts => {

  const account_one = accounts[0];
  const account_two = accounts[1];
  const account_three = accounts[2];

  const { proof, input } = require('../../zokrates/code/square/proof.json')

  // console.log(" before each")
  beforeEach(async () => {
    //console.log("in before each")
    const verifierContract = await Verifier.new({ from: accounts[0] })
    this.contract = await SolnSquareVerifier.new(verifierContract.address,  { from: accounts[0] })

    // //Mint 10 new tokens
  // // TODO: mint multiple tokens
  //console.log("before minting")
  const tx =  await this.contract.mint(account_two, 0)
  await this.contract.mint(account_two, 1)
  await this.contract.mint(account_two, 2)
  await this.contract.mint(account_two, 3)
  await this.contract.mint(account_two, 4)
  await this.contract.mint(account_two, 5)
  await this.contract.mint(account_two, 6)
  await this.contract.mint(account_two, 7)
  await this.contract.mint(account_two, 8)
  await this.contract.mint(account_two, 9)
  }) // End of Before each  
  

  // console.log("before tottal supply test")
  // it('should return total supply', async function () { 
  //   const supply = await this.contract.totalSupply.call()
  //   console.log("total supply is " + supply)
  //   assert.equal(supply, 10, 'Incorrect Supply value')
  // })

  // Test if a new solution can be added for contract - SolnSquareVerifier
it('Can add new solution for contract', async () => {
  const hash = await this.contract.hash.call(
    proof.A,
    proof.A_p,
    proof.B,
    proof.B_p,
    proof.C,
    proof.C_p,
    proof.H,
    proof.K,
    input
    )
    const tx = await this.contract.addSolution(
      1,
      accounts[1],
      hash
    )
    // truffleAssert.eventEmitted(
    //   tx,
    //   'SolutionAdded',
    //   ev => {
    //     return +ev.index == 1 &
    //     ev.solvedBy === accounts[1]
    //   },
    //   'SolutionAdded event should have been emitted'
    // )      
  })

  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
it('Can mint token', async () => {
  const tx = await this.contract.mintNewToken(
    accounts[1],
    25,
    proof.A,
    proof.A_p,
    proof.B,
    proof.B_p,
    proof.C,
    proof.C_p,
    proof.H,
    proof.K,
    input,
    { from: accounts[0] }
    )
    assert(tx, 'token not minted')

    // truffleAssert.eventEmitted(
    //   tx,
    //   'Transfer',
    //   ev => {
    //     return ev.from === accounts[0] &
    //     ev.to === accounts[1] &
    //     +ev.tokenId == 2
    //   },
    //   'Transfer event should have been emitted'
    // )
  })
      

}) //End of Contract



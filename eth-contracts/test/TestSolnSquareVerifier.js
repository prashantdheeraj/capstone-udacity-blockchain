const SolnSquareVerifier = artifacts.require('SolnSquareVerifier')
const Verifier = artifacts.require('Verifier')


contract('SolnSquareVerifier', accounts => {

  const { proof, input } = require('../../zokrates/code/square/proof.json')

  beforeEach(async () => {
    const verifierContract = await Verifier.new({ from: accounts[0] })
    this.contract = await SolnSquareVerifier.new(
      verifierContract.address,
      { from: accounts[0] }
    )
  })

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
   
  })

  // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
  it('Can mint token', async () => {
    const tx = await this.contract.mintNewToken(
      accounts[1],
      2,
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

  })
})

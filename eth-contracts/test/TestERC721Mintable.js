var ERC721MintableComplete = artifacts.require('DecentralizedHouseListingToken');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
  

    describe('match erc721 spec', function () {

        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            const tx = await this.contract.mint(account_two, 0)
            await this.contract.mint(account_two, 1)
            await this.contract.mint(account_two, 2)
            await this.contract.mint(account_two, 3)
            await this.contract.mint(account_two, 4)
            await this.contract.mint(account_two, 5)
            await this.contract.mint(account_two, 6)
            await this.contract.mint(account_two, 7)
            await this.contract.mint(account_two, 8)
            await this.contract.mint(account_two, 9)
        })

        it('should return total supply', async function () { 
            const supply = await this.contract.totalSupply()
            assert.equal(supply, 10, 'Incorrect Supply value')
            
        })

        it('should get token balance', async function () { 
            const balance = await this.contract.balanceOf(account_two)
            assert.equal(balance, 10, 'Incorrect Balance')
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            const URI = await this.contract.tokenURI(1)
            assert.equal(
                URI,
              'https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1',
            'Incorrect URI')
            
        })

        it('should transfer token from one owner to another', async function () { 
            
            const tx = await this.contract.transferFrom(
                account_two,
                account_three,
                0,
                { from: account_two}
              )

            assert.equal(
                await this.contract.ownerOf(0),
                account_three,
                'Incorrect Transfer. Ownership not correct'
            )
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                await this.contract.mint(account_two, 1, { from: account_two })
              } catch (error) {
                assert(error.message.includes('Only owner'), 'Incorrect Revert')
              }
        })

        it('should return contract owner', async function () { 
            assert.equal(
                await this.contract.owner(),
                account_one,
                'Incorrect Contract Owner Address'
              )
            
        })

    });
})
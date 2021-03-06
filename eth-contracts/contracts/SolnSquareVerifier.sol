pragma solidity ^0.5.2;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./Verifier.sol";
import "./ERC721Mintable.sol";


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is DecentralizedHouseListingToken {
    
    Verifier verifierContract;

    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        uint index;
        address solver;
    }

    // TODO define an array of the above struct
    Solution[] private solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => Solution) private uniqueSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(uint index, address solver);

    constructor(address verifierContractAddress) public {
        verifierContract = Verifier(verifierContractAddress);
    }

    

    function hash
    (
       uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input
    )
    public pure returns(bytes32)
    {
         return keccak256(abi.encodePacked(a, a_p, b, b_p, c, c_p, h, k, input));
    }

    // function to add the solutions to the array and emit the event
    function addSolution(uint index, address solver, bytes32 solutionHash) public
    {
        Solution memory solution = Solution(index, solver);
        solutions.push(solution);
        uniqueSolutions[solutionHash] = solution;

        emit SolutionAdded(index, solver);
    }

    // TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly
    // function to mint new NFT only after the solution has been verified
    function mintNewToken
    (
        address to,
        uint tokenId,
        uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input
    )
    public
    returns (bool)
    {
        bytes32 solutionHash = hash(a, a_p, b, b_p, c, c_p, h, k, input);
        bool verified = verifierContract.verifyTx(a, a_p, b, b_p, c, c_p, h, k, input);
        require(verified, "Solution not verified (zero Knowledge Proof check)");
        require(
            uniqueSolutions[solutionHash].solver == address(0),
            "Solution has already been used before"
        );
        addSolution(tokenId, to, solutionHash);
        return mint(to, tokenId);
    }
}
























  



























"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AuroxToken__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "uniSwapAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "teamRewardAddress",
                type: "address"
            },
            {
                internalType: "address",
                name: "exchangeListingReserve",
                type: "address"
            },
            {
                internalType: "address",
                name: "reservesAddress",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
        ],
        name: "Approval",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "OwnershipTransferred",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256"
            },
        ],
        name: "Transfer",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address"
            },
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address"
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256"
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256"
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "reservesVestingContract",
        outputs: [
            {
                internalType: "contract TokenVesting",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "allowanceAddress",
                type: "address"
            },
        ],
        name: "setAllowance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "teamRewardVestingContract",
        outputs: [
            {
                internalType: "contract TokenVesting",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address"
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address"
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
];
var _bytecode = "0x6080604052695f4a8c8375d15540000060085569043c33c1937564800000600955691b87506a3e7b0d400000600a5569152d02c7e14af6800000600b55690a968163f0a57b400000600c556934f086f3b33b68400000600d553480156200006557600080fd5b50604051620022ef380380620022ef8339810160408190526200008891620006a8565b604080518082018252600b81526a20bab937bc102a37b5b2b760a91b6020808301918252835180850190945260048452635552555360e01b908401528151919291620000d791600391620005d7565b508051620000ed906004906020840190620005d7565b5050506200010a620001046200014d60201b60201c565b62000151565b620001203369d3c21bcecceda1000000620001a3565b6200012d8484846200027b565b62000139818462000297565b62000143620003be565b5050505062000769565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216620001ff5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064015b60405180910390fd5b806002600082825462000213919062000705565b90915550506001600160a01b038216600090815260208190526040812080548392906200024290849062000705565b90915550506040518181526001600160a01b03831690600090600080516020620022cf8339815191529060200160405180910390a35050565b620002913069a30dc89cad279d400000620003f8565b50505050565b81620002a74262f1428062000705565b60006301e133806000604051620002be9062000666565b6001600160a01b0390951685526020850193909352604084019190915260608301521515608082015260a001604051809103906000f08015801562000307573d6000803e3d6000fd5b50600680546001600160a01b0319166001600160a01b03929092169190911790558062000339426301e1338062000705565b60006303c267006000604051620003509062000666565b6001600160a01b0390951685526020850193909352604084019190915260608301521515608082015260a001604051809103906000f08015801562000399573d6000803e3d6000fd5b50600780546001600160a01b0319166001600160a01b03929092169190911790555050565b600754600a54620003d9916001600160a01b031690620003f8565b50600654600b54620003f5916001600160a01b031690620003f8565b50565b60006200040733848462000410565b50600192915050565b6001600160a01b038316620004765760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401620001f6565b6001600160a01b038216620004da5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401620001f6565b6001600160a01b03831660009081526020819052604090205481811015620005545760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401620001f6565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906200058d90849062000705565b92505081905550826001600160a01b0316846001600160a01b0316600080516020620022cf83398151915284604051620005c991815260200190565b60405180910390a362000291565b828054620005e5906200072c565b90600052602060002090601f01602090048101928262000609576000855562000654565b82601f106200062457805160ff191683800117855562000654565b8280016001018555821562000654579182015b828111156200065457825182559160200191906001019062000637565b506200066292915062000674565b5090565b61101a80620012b583390190565b5b8082111562000662576000815560010162000675565b80516001600160a01b0381168114620006a357600080fd5b919050565b60008060008060808587031215620006bf57600080fd5b620006ca856200068b565b9350620006da602086016200068b565b9250620006ea604086016200068b565b9150620006fa606086016200068b565b905092959194509250565b600082198211156200072757634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200074157607f821691505b602082108114156200076357634e487b7160e01b600052602260045260246000fd5b50919050565b610b3c80620007796000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063715018a6116100a2578063a9059cbb11610071578063a9059cbb14610222578063dd62ed3e14610235578063ee20e7841461026e578063ef27d22c14610281578063f2fde38b1461029457600080fd5b8063715018a6146101ec5780638da5cb5b146101f657806395d89b4114610207578063a457c2d71461020f57600080fd5b806323b872dd116100de57806323b872dd1461018e578063313ce567146101a157806339509351146101b057806370a08231146101c357600080fd5b806306fdde0314610110578063095ea7b31461012e57806318160ddd146101515780632191cccb14610163575b600080fd5b6101186102a7565b6040516101259190610944565b60405180910390f35b61014161013c3660046109b5565b610339565b6040519015158152602001610125565b6002545b604051908152602001610125565b600754610176906001600160a01b031681565b6040516001600160a01b039091168152602001610125565b61014161019c3660046109df565b61034f565b60405160128152602001610125565b6101416101be3660046109b5565b6103fe565b6101556101d1366004610a1b565b6001600160a01b031660009081526020819052604090205490565b6101f461043a565b005b6005546001600160a01b0316610176565b610118610470565b61014161021d3660046109b5565b61047f565b6101416102303660046109b5565b610518565b610155610243366004610a3d565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101f461027c366004610a1b565b610525565b600654610176906001600160a01b031681565b6101f46102a2366004610a1b565b610567565b6060600380546102b690610a70565b80601f01602080910402602001604051908101604052809291908181526020018280546102e290610a70565b801561032f5780601f106103045761010080835404028352916020019161032f565b820191906000526020600020905b81548152906001019060200180831161031257829003601f168201915b5050505050905090565b60006103463384846105ff565b50600192915050565b600061035c848484610723565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156103e65760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103f385338584036105ff565b506001949350505050565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091610346918590610435908690610aab565b6105ff565b6005546001600160a01b031633146104645760405162461bcd60e51b81526004016103dd90610ad1565b61046e60006108f2565b565b6060600480546102b690610a70565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156105015760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103dd565b61050e33858584036105ff565b5060019392505050565b6000610346338484610723565b6005546001600160a01b0316331461054f5760405162461bcd60e51b81526004016103dd90610ad1565b61056430826989a492133867424000006105ff565b50565b6005546001600160a01b031633146105915760405162461bcd60e51b81526004016103dd90610ad1565b6001600160a01b0381166105f65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103dd565b610564816108f2565b6001600160a01b0383166106615760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103dd565b6001600160a01b0382166106c25760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103dd565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166107875760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103dd565b6001600160a01b0382166107e95760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103dd565b6001600160a01b038316600090815260208190526040902054818110156108615760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103dd565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610898908490610aab565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108e491815260200190565b60405180910390a350505050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600060208083528351808285015260005b8181101561097157858101830151858201604001528201610955565b81811115610983576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109b057600080fd5b919050565b600080604083850312156109c857600080fd5b6109d183610999565b946020939093013593505050565b6000806000606084860312156109f457600080fd5b6109fd84610999565b9250610a0b60208501610999565b9150604084013590509250925092565b600060208284031215610a2d57600080fd5b610a3682610999565b9392505050565b60008060408385031215610a5057600080fd5b610a5983610999565b9150610a6760208401610999565b90509250929050565b600181811c90821680610a8457607f821691505b60208210811415610aa557634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610acc57634e487b7160e01b600052601160045260246000fd5b500190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260408201526060019056fea26469706673582212207c3a5479f74dc7865701639c1b760cb68ef56b7efb431b2d56c2ac9be8b4b61f64736f6c6343000809003360806040523480156200001157600080fd5b506040516200101a3803806200101a8339810160408190526200003491620002aa565b6200003f3362000245565b600180556001600160a01b038516620000b55760405162461bcd60e51b815260206004820152602d60248201527f546f6b656e56657374696e673a2062656e65666963696172792069732074686560448201526c207a65726f206164647265737360981b60648201526084015b60405180910390fd5b818311156200011b5760405162461bcd60e51b815260206004820152602b60248201527f546f6b656e56657374696e673a20636c696666206973206c6f6e67657220746860448201526a30b710323ab930ba34b7b760a91b6064820152608401620000ac565b600082116200016d5760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e56657374696e673a206475726174696f6e206973203000000000006044820152606401620000ac565b426200018883866200029560201b620006d51790919060201c565b11620001ef5760405162461bcd60e51b815260206004820152602f60248201527f546f6b656e56657374696e673a2066696e616c2074696d65206973206265666f60448201526e72652063757272656e742074696d6560881b6064820152608401620000ac565b600280546001600160a01b0319166001600160a01b0387161790556006805460ff1916821515179055600582905562000235848462000295602090811b620006d517901c565b600355505050600455506200033d565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000620002a3828462000316565b9392505050565b600080600080600060a08688031215620002c357600080fd5b85516001600160a01b0381168114620002db57600080fd5b80955050602086015193506040860151925060608601519150608086015180151581146200030857600080fd5b809150509295509295909350565b600082198211156200033857634e487b7160e01b600052601160045260246000fd5b500190565b610ccd806200034d6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063872a781011610071578063872a78101461012d5780638da5cb5b146101445780639852595c14610155578063be9a65551461017e578063f2fde38b14610186578063fa01dc061461019957600080fd5b80630fb5a6b4146100b957806313d033c0146100d057806319165587146100d857806338af3eed146100ed578063715018a61461011257806374a8f1031461011a575b600080fd5b6005545b6040519081526020015b60405180910390f35b6003546100bd565b6100eb6100e6366004610b05565b6101c5565b005b6002546001600160a01b03165b6040516001600160a01b0390911681526020016100c7565b6100eb610395565b6100eb610128366004610b05565b6103cb565b60065460ff165b60405190151581526020016100c7565b6000546001600160a01b03166100fa565b6100bd610163366004610b05565b6001600160a01b031660009081526007602052604090205490565b6004546100bd565b6100eb610194366004610b05565b61063a565b6101346101a7366004610b05565b6001600160a01b031660009081526008602052604090205460ff1690565b6002546001600160a01b0316336001600160a01b0316146102475760405162461bcd60e51b815260206004820152603160248201527f43616c6c6572206e6f74207468652062656e6566696369617279206f66207468604482015270652056657374696e6720616d6f756e747360781b60648201526084015b60405180910390fd5b6002600154141561029a5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161023e565b600260015560006102aa826106e8565b9050600081116102fc5760405162461bcd60e51b815260206004820152601f60248201527f546f6b656e56657374696e673a206e6f20746f6b656e73206172652064756500604482015260640161023e565b6001600160a01b03821660009081526007602052604090205461031f90826106d5565b6001600160a01b0380841660008181526007602052604090209290925560025461034b9291168361071a565b604080516001600160a01b0384168152602081018390527fc7798891864187665ac6dd119286e44ec13f014527aeeb2b8eb3fd413df93179910160405180910390a1505060018055565b6000546001600160a01b031633146103bf5760405162461bcd60e51b815260040161023e90610b22565b6103c96000610771565b565b6000546001600160a01b031633146103f55760405162461bcd60e51b815260040161023e90610b22565b600260015414156104485760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161023e565b600260015560065460ff1661049f5760405162461bcd60e51b815260206004820152601b60248201527f546f6b656e56657374696e673a2063616e6e6f74207265766f6b650000000000604482015260640161023e565b6001600160a01b03811660009081526008602052604090205460ff16156105145760405162461bcd60e51b815260206004820152602360248201527f546f6b656e56657374696e673a20746f6b656e20616c7265616479207265766f6044820152621ad95960ea1b606482015260840161023e565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b15801561055657600080fd5b505afa15801561056a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058e9190610b57565b9050600061059b836106e8565b905060006105a983836107c1565b6001600160a01b0385166000908152600860205260409020805460ff1916600117905590506105f46105e36000546001600160a01b031690565b6001600160a01b038616908361071a565b6040516001600160a01b03851681527f39983c6d4d174a7aee564f449d4a5c3c7ac9649d72b7793c56901183996f8af69060200160405180910390a15050600180555050565b6000546001600160a01b031633146106645760405162461bcd60e51b815260040161023e90610b22565b6001600160a01b0381166106c95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161023e565b6106d281610771565b50565b60006106e18284610b86565b9392505050565b6001600160a01b0381166000908152600760205260408120546107149061070e846107cd565b906107c1565b92915050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261076c9084906108fb565b505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006106e18284610b9e565b6040516370a0823160e01b815230600482015260009081906001600160a01b038416906370a082319060240160206040518083038186803b15801561081157600080fd5b505afa158015610825573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108499190610b57565b6001600160a01b038416600090815260076020526040812054919250906108719083906106d5565b9050600354421015610887575060009392505050565b600554600454610896916106d5565b421015806108bc57506001600160a01b03841660009081526008602052604090205460ff165b156108c8579392505050565b6108f36005546108ed6108e6600454426107c190919063ffffffff16565b84906109cd565b906109d9565b949350505050565b6000610950826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166109e59092919063ffffffff16565b80519091501561076c578080602001905181019061096e9190610bb5565b61076c5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161023e565b60006106e18284610bd7565b60006106e18284610bf6565b60606108f3848460008585843b610a3e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161023e565b600080866001600160a01b03168587604051610a5a9190610c48565b60006040518083038185875af1925050503d8060008114610a97576040519150601f19603f3d011682016040523d82523d6000602084013e610a9c565b606091505b5091509150610aac828286610ab7565b979650505050505050565b60608315610ac65750816106e1565b825115610ad65782518084602001fd5b8160405162461bcd60e51b815260040161023e9190610c64565b6001600160a01b03811681146106d257600080fd5b600060208284031215610b1757600080fd5b81356106e181610af0565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215610b6957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610b9957610b99610b70565b500190565b600082821015610bb057610bb0610b70565b500390565b600060208284031215610bc757600080fd5b815180151581146106e157600080fd5b6000816000190483118215151615610bf157610bf1610b70565b500290565b600082610c1357634e487b7160e01b600052601260045260246000fd5b500490565b60005b83811015610c33578181015183820152602001610c1b565b83811115610c42576000848401525b50505050565b60008251610c5a818460208701610c18565b9190910192915050565b6020815260008251806020840152610c83816040850160208701610c18565b601f01601f1916919091016040019291505056fea2646970667358221220c1953087ecea15c3c3650ee4252d427e3679caf18b0b94237ce3819ce7a6ac8064736f6c63430008090033ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef";
var AuroxToken__factory = /** @class */ (function (_super) {
    __extends(AuroxToken__factory, _super);
    function AuroxToken__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (args.length === 1) {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        else {
            _this = _super.apply(this, args) || this;
        }
        return _this;
    }
    AuroxToken__factory.prototype.deploy = function (uniSwapAddress, teamRewardAddress, exchangeListingReserve, reservesAddress, overrides) {
        return _super.prototype.deploy.call(this, uniSwapAddress, teamRewardAddress, exchangeListingReserve, reservesAddress, overrides || {});
    };
    AuroxToken__factory.prototype.getDeployTransaction = function (uniSwapAddress, teamRewardAddress, exchangeListingReserve, reservesAddress, overrides) {
        return _super.prototype.getDeployTransaction.call(this, uniSwapAddress, teamRewardAddress, exchangeListingReserve, reservesAddress, overrides || {});
    };
    AuroxToken__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    AuroxToken__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    AuroxToken__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    AuroxToken__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    AuroxToken__factory.bytecode = _bytecode;
    AuroxToken__factory.abi = _abi;
    return AuroxToken__factory;
}(ethers_1.ContractFactory));
exports.AuroxToken__factory = AuroxToken__factory;
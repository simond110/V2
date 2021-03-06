"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IAuroxToken__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
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
];
var IAuroxToken__factory = /** @class */ (function () {
    function IAuroxToken__factory() {
    }
    IAuroxToken__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    IAuroxToken__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    IAuroxToken__factory.abi = _abi;
    return IAuroxToken__factory;
}());
exports.IAuroxToken__factory = IAuroxToken__factory;

const Web3 = require('web3');
const UNISWAP = require('@uniswap/sdk')
var provider = '' //change to network used
var web3 = new Web3(new Web3.providers.HttpProvider(provider));

const minABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Approval',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'approve',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'burn',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'subtractedValue',
                type: 'uint256',
            },
        ],
        name: 'decreaseAllowance',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'addedValue',
                type: 'uint256',
            },
        ],
        name: 'increaseAllowance',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'previousOwner',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
    },
    {
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transfer',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'from',
                type: 'address',
            },
            {
                indexed: true,
                internalType: 'address',
                name: 'to',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
        ],
        name: 'Transfer',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'recipient',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: 'amount',
                type: 'uint256',
            },
        ],
        name: 'transferFrom',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'newOwner',
                type: 'address',
            },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'owner',
                type: 'address',
            },
            {
                internalType: 'address',
                name: 'spender',
                type: 'address',
            },
        ],
        name: 'allowance',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: 'account',
                type: 'address',
            },
        ],
        name: 'balanceOf',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'decimals',
        outputs: [
            {
                internalType: 'uint8',
                name: '',
                type: 'uint8',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'name',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'owner',
        outputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'symbol',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'totalSupply',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
]

const uniswapABI =
    [
        {
            "inputs": [],
            "name": "WETH",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountIn",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                }
            ],
            "name": "getAmountsOut",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "amountOut",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "amountInMax",
                    "type": "uint256"
                },
                {
                    "internalType": "address[]",
                    "name": "path",
                    "type": "address[]"
                },
                {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "deadline",
                    "type": "uint256"
                }
            ],
            "name": "swapTokensForExactETH",
            "outputs": [
                {
                    "internalType": "uint256[]",
                    "name": "amounts",
                    "type": "uint256[]"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]



var tokenAddress = ""  //morph tokenAddress
var uniswapAddress = ''  //Uniswap Address
web3.eth.defaultAccount = ''; // key n address
var privateKey = "" //private key

var contractinstance;


class web3Service {
    /**
  * API for Cron job working
  * @param {*} req ()
  * @param {*} res (json with success/failure)
  */


    async transferToken(address, numberOfTokens, callback) {
        let value = web3.utils.toWei(numberOfTokens.toString(), 'ether');
        try {
            //  approve function
            contractinstance = new web3.eth.Contract(minABI, tokenAddress);
            const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
            const transaction = contractinstance.methods.approve(uniswapAddress, value);
            const options = {
                to: transaction._parent._address,
                data: transaction.encodeABI(),
                gas: await transaction.estimateGas({ from: account }),
                gasPrice: web3.utils.toHex(Web3.utils.toWei('95', 'gwei')),
            };

            const signed = await web3.eth.accounts.signTransaction(options, privateKey);
            const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);

            if (receipt.status) {
                const chainId = UNISWAP.ChainId.RINKEBY;  //change to network used
                const weth = UNISWAP.WETH[chainId];
                let path = [tokenAddress, weth.address];

                //   get amount Out
                contractinstance = new web3.eth.Contract(uniswapABI, uniswapAddress);
                let bal = await contractinstance.methods.getAmountsOut(value, path).call()
                let newValueOut = bal[1] / 10 ** 18
                console.log("mT_to_eth", newValueOut)

                let amountOutMin = bal[1];
                let newAmountInMax = numberOfTokens + (numberOfTokens * 0.05);
                let amountInMax = web3.utils.toWei(newAmountInMax.toString(), 'ether');;
                const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

                //  ------------swapTokensForExactETH-----------
                contractinstance = new web3.eth.Contract(uniswapABI, uniswapAddress);
                const transaction = contractinstance.methods.swapTokensForExactETH(amountOutMin, amountInMax, path, address, deadline);
                let option = {
                    to: uniswapAddress,
                    data: transaction.encodeABI(),
                    gas: await transaction.estimateGas({ from: account }),
                    gasPrice: web3.utils.toHex(Web3.utils.toWei('95', 'gwei')),
                };
                const signed = await web3.eth.accounts.signTransaction(option, privateKey);
                const receipt = await web3.eth.sendSignedTransaction(signed.rawTransaction);
                return { code: 200, message: "success", data: receipt.transactionHash, value: newValueOut };
            }
        } catch (error) {
            console.log(error);
            return { code: 200, message: "error", data: error };
        }
    }


    /**
    * Function to signed and call function in solidity
    * param data
    * return (err, transactionhash)
    */
    async swapTokens(rawData) {
        try {
            let response = await this.transferToken(rawData.address, rawData.numberOfTokens)
            return response;
        } catch (error) {
            return { code: code.dbCode, message: message.dbError, data: error };
        }

    }

    /**
    * Function to get balance of eth
    */
    async getBalance(rawData) {
        try {
            var balance = 0;
            balance = await web3.eth.getBalance(rawData.walletAddress);
            balance = await web3.utils.fromWei(balance.toString(), 'ether');
            if (balance > 0) {
                return { code: 200, message: "success", bal: balance };
            }
        } catch (err) {
            return { code: 200, message: "error", data: err };

        }

    }

    async getEthToMt(rawData) {
        try {
            let value = web3.utils.toWei(rawData.value.toString(), 'ether');
            const chainId = UNISWAP.ChainId.RINKEBY;  //change to network used
            const weth = UNISWAP.WETH[chainId];
            let path = [weth.address,tokenAddress];
            //   get amount Out
            contractinstance = new web3.eth.Contract(uniswapABI, uniswapAddress);
            let bal = await contractinstance.methods.getAmountsOut(value, path).call()
            let newValueOut = bal[1] / 10 ** 18
            console.log("mT_to_eth", newValueOut)
            return { code: 200, message: "success",  value: newValueOut };

        } catch (err) {
            return { code: 200, message: "error", data: err };

        }

    }


}
module.exports = {
    web3Service: function () {
        return new web3Service();
    }
};

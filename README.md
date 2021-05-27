# morph
A nodejs project to swap 2 tokens using uniswap ABI
Using smart contracts to swap eth and a new  token and vise versa

Enter infura provider link, address of token we need to swap as well as smart contract address.


Commands:
npm i
npm start

API:

/swapTokens - POST method
request body :
{
address: ' 'wallet address'', 
numberOfTokens: 'amount of token we need to swap'
}


/getBalance - POST method
request body :
{
address: 'wallet address', 

}

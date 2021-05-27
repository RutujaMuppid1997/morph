const object = require('./web3');

const controller = {

  async swapTokens(rawData) {
    try {
      const response = await object.web3Service().swapTokens(rawData);
      return response
    }
    catch (e) {
      console.log(error)
    }
  },
  async getBalance(rawData) {
    try {
      const response = await object.web3Service().getBalance(rawData);
      return response
    }
    catch (e) {
      console.log(e)
    }
  },
  async getEthToMt(rawData) {
    try {
      const response = await object.web3Service().getEthToMt(rawData);
      return response
    }
    catch (e) {
      console.log(e)
    }
  },
};

module.exports = controller;

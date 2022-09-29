require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/PqwWnbIGZpgxNM8P21D1Tp3iTq8r7ee9',
      accounts: ['caf31c796364d3bb96900bd3e9cbf93aed7b776f944eb95bf2be9e25a14d836e'],
    },
  },
};
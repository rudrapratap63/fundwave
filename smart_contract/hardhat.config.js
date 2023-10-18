require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/GYzTh9cmIRNYQRbsDRk2Duy4sxHEZdeQ',
      accounts: ['7b698b1ad33e618551ddd7380715b4194d1ad46e7d36ddd2b0ca7eb917913d9f'],
    },
  },
};  
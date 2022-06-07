/**
     * @type import('hardhat/config').HardhatUserConfig
     */
 require('dotenv').config(); //all the key value pairs are being made available due to this lib
 require('@nomiclabs/hardhat-ethers');
 const {API_URL_KEY, PRIVATE_KEY} = process.env; //environment variables are being loaded here.
 module.exports = {
   solidity: "0.8.0",
   defaultNetwork: 'rinkeby',
   networks: {
     hardhat: {},
     rinkeby: {
         url: 'https://eth-rinkeby.alchemyapi.io/v2/OIFca-LooqN9071XE-D7gkZL0QwdwAbk',
         accounts: [`379851c8072e5b1c1852e0b2fe6564d7ec843df2b82a281f4d91778356482c51`]
     }
   }
 };
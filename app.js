const BitGo = require('bitgo');
const bitgo = new BitGo.BitGo({ accessToken: process.env.ACCESS_TOKEN, env: 'prod' }); // defaults to testnet. add env: 'prod' if you want to go against mainnet

module.exports ={
    get: bitgo.session()
};
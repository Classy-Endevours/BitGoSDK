const BitGo = require("bitgo");
const obj = {
    accessToken: process.env.ACCESS_TOKEN
}
if(process.env.NODE_ENV){
    obj.env = process.env.NODE_ENV
}
const bitgo = new BitGo.BitGo(obj); // defaults to testnet. add env: 'prod' if you want to go against mainnet

module.exports = {
  get: bitgo.session(),
};

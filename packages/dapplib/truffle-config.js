require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stomach razor predict undo harvest bag army gesture'; 
let testAccounts = [
"0x70779e5906047d9f1a726a38bdf65a3571a2206991e0832df7032ba9eb99cc5e",
"0x387a36c6e9f6ad00afa526593ad679b4d805de0f877eadeae0ef83dfab195119",
"0xd785bd7036222ccfb8a8de6b68dc5eea6a95f4aed11acc4c1462dd909d91d290",
"0x42de14e2b09aeea4abbfccaf8e6e68f7eda19d853bd6c51eaee382a3327f2f72",
"0xca467ccbd8af987629530aa0cdf01e58644b404df785af69fbb4261cd9224b09",
"0xecac25612b8458e4ec1f16210f2498e59f425e86763702d92ccca35cf64ef005",
"0x7c70a218c6e845810c4f267aa2665f99bd2f4feaa2053f8a82c625da92d7e7ba",
"0xa183a7bc4f1f2a4d023e69b7dbdf8e56e130e92918bad00e4625f4dbaed7c7f4",
"0xf6d1d4857609d7e02e14a3eb7797cf2352410a695641d15217560bd33012c00b",
"0x9bcb4ba5ccfc3b59f41145526483d003fa5015299d6b8f926b17bb16ccf7b698"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


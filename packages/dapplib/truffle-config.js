require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope clock bridge silver normal note spice collect grace clog tail general'; 
let testAccounts = [
"0x78e0e54a7d8490240fd05afc2a8b973d81fe2d1665a0a292e7245bc18656e4ef",
"0x476fb5bbc15e293fd688b7fd5c64bf9e498ab90221d911031f2955826ee078f3",
"0x17060f31ac08cd4ee1d88b374238383c16dd1e98444a0d5c676e51592ca4efe8",
"0x9c2fff0f55917d996caf1599be52e60290c3aade2677991145ea3903bfd82b9b",
"0xe419443c9c21fd6d369e17321c615514a9b314867f2a87310daa03970ee4e9a5",
"0xbb51e3c3cfee9eee14af8045fc44b631cecc215ba27c97c24ade2f793d741fbe",
"0xf607d938917c0d8f75037f3e1a7ef7cffdc6739e4958528f3409c81fd1b13713",
"0x252f793b48c63ca5419a4d7dc8f8325d50ea09eb02271380fcc320f13a6790f7",
"0x793307e6fba1d802d27728af245d99e584acb60cb97a2ff5062c7d5db761a429",
"0x4252336e710b7a1951d35e6cd778b4323e33b8139bf51d6e3fba01030966e105"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

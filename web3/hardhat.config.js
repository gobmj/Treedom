/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: {
        version: '0.8.9',
        defaultNetwork: 'goerli',
        networks: {
            hardhat: {},
            goerli: {
                url: 'https://rpc.ankr.com/eth_goerli',
                accounts: [`0x${process.env.PRIVATE_KEY}`]
            },
            ganache: {
                url: 'http://localhost:7545', // URL of your running Ganache instance
                chainId: 1337, // Chain ID for Ganache
                gas: 6000000, // Gas limit for transactions
                gasPrice: 1000000000, // Gas price in wei (1 gwei)
            },
        },
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};

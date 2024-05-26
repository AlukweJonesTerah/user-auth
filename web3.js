const Web3 = require('web3');
require("dotenv").config();

const { ALCHMEY_RPC_URL } = process.env;

// Initialize Web3 provider
const web3 = new Web3('https://mainnet.infura.io/v3/${ALCHMEY_RPC_URL}');

// Account addresses
const deployingAccount = '0xa906a28ed258dAd4E8D32A6D0248603053FbD4A9';
const senderAccount = '0xYourSenderAccountAddress';

// Send some ether to the deploying account
const amountToSend = web3.utils.toWei('1', 'ether'); // Specify the amount in wei
web3.eth.sendTransaction({
    from: senderAccount,
    to: deployingAccount,
    value: amountToSend
})
.then(receipt => {
    console.log('Ether sent successfully:', receipt);
})
.catch(error => {
    console.error('Error sending ether:', error);
});
module.exports = web3;
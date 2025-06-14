require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    baseMainnet: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
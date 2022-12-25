require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_MUMBAI_URI = process.env.ALCHEMY_MUMBAI_URI;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: ALCHEMY_MUMBAI_URI,
      accounts: [PRIVATE_KEY],
    },
  },
};

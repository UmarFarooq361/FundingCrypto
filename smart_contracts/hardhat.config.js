// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
        url: "https://eth-sepolia.g.alchemy.com/v2/UmQm6xrmoUx5m9MOLv5a0qXHbrzss7wp",
        accounts: ["ba0e1ca40308bad2a4c92927add83c620bbae2104ccd70822c1f4cb46a25b02b"]
  }
}
};

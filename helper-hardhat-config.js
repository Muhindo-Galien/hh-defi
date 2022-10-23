const networkConfig = {
    31337: {
      name: "localhost",
      wethToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    5: {
      name: "goerli",
      ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
      wethToken: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    },
  }
  const INITIAL_SUPPLY = "1000000000000000000000000"
  
  const developmentChains = ["hardhat", "localhost"]
  
  module.exports = {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY,
  }
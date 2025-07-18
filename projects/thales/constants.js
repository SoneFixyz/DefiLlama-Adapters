const CONTRACTS = {
  optimism: {
    LP_TOKEN: [
      '0x3f60fca6c50ae3bcd95ae150b4c57f0ba5c3f2ad', // USDC/OVER Uniswap V3
      '0x1EaA860dca29a5124F665F7d80AffED92e877681', // OVER/WETH Velodrome Finance V2
      '0x2ee4db658906e04a10874dd8f11bfd32e4439038' // USDC/OVER Uniswap V2
    ],
    STAKING_CONTRACT: '0xc392133eea695603b51a5d5de73655d571c2ce51',
    SPEED_MARKETS: [
      '0xE16B8a01490835EC1e76bAbbB3Cadd8921b32001',
      '0xFf8Cf5ABF583D0979C0B9c35d62dd1fD52cce7C7'
    ],
    MANAGERS: {
      digital: ['0x7f9e03e40d8b95419C7BdF30D256d08f2Ec11Dba'],
      sports: ['0x2367FB44C4C2c4E5aAC62d78A55876E01F251605']
    },
    SPORTS_POOLS: {
      USDC: '0x0fe1044Fc8C05482102Db14368fE88791E9B8698',
      WETH: '0x4f2822D4e60af7f9F70E7e45BC1941fe3461231e',
      THALES: '0xE59206b08cC96Da0818522C75eE3Fd4EBB7c0A47',
      OVERTIME: '0x59a7A8Ae9d58D69a69b6A24770EC771110647226'
    },
    DIGITAL_POOLS: {
      USDC: '0x47Da40be6B617d0199ADF1Ec3550f3875b246124'
    }
  },
  arbitrum: {
    LP_TOKEN: [
      "0xf949972f36d30c87761dd220ea06b90de8ca4555", // OVER/WETH Uniswap V3
      "0x4d4904a55e3fa0785ade931ac7856bd805369424", // OVER/USDC Uniswap V3
      "0xfc90c3e2e2412cb4ad3af1a600994a6571274869" // OVER/WETH Uniswap V3
    ],
    STAKING_CONTRACT: '0x160Ca569999601bca06109D42d561D85D6Bb4b57',
    SPEED_MARKETS: [
      '0x02D0123a89Ae6ef27419d5EBb158d1ED4Cf24FA3',
      '0xe92B4c614b04c239d30c31A7ea1290AdDCb8217D'
    ],
    MANAGERS: {
      digital: ['0x95d93c88c1b5190fA7FA4350844e0663e5a11fF0'],
      sports: ['0xB155685132eEd3cD848d220e25a9607DD8871D38']
    },
    SPORTS_POOLS: {
      USDC: '0x22D180F39A0eB66098cf839AF5e3C6b009383B6A',
      WETH: '0xcB4728a1789B87E05c813B68DBc5E6A98a4856bA',
      THALES: '0x9733AB157f5A89f0AD7460d08F869956aE2018dA',
      OVERTIME: '0xc5f5186b46c84bF63a9e166bfa2175D9bc391ce2',
      WBTC: '0xbD08D8F8c17C22fb0a12Fe490F38f40c59B60d2A'
    },
    DIGITAL_POOLS: {
      USDC: '0xea4c2343Fd3C239c23Dd37dd3ee51AEc84544735'
    }
  },
  polygon: {
    SPEED_MARKETS: [
      '0x4B1aED25f1877E1E9fBECBd77EeE95BB1679c361',
      '0x14D2d7f64D6F10f8eF06372c2e5E36850661a537'
    ]
  },
  base: {
    LP_TOKEN: [
      "0xb452f81d9322936c2c8ac6445f6892cb957afb4c", // OVER/WETH Aerodrome 
      "0x41a6e4db2b4c0c3e550709dfdaf921d2118dfd5f" // OVER/USDC Uniswap V3
    ],
    STAKING_CONTRACT: '0x84aB38e42D8Da33b480762cCa543eEcA6135E040',
    SPEED_MARKETS: [
      '0x85b827d133FEDC36B844b20f4a198dA583B25BAA',
      '0x6848F001ddDb4442d352C495c7B4a231e3889b70'
    ],
    MANAGERS: {
      digital: ['0xc62E56E756a3D14ffF838e820F38d845a16D49dE'],
      sports: ['0xA2dCFEe657Bc0a71AC31d146366246202eae18a4']
    },
    SPORTS_POOLS: {
      USDC: '0xf86e90412F52fDad8aD8D1aa2dA5B2C9a7e5f018',
      WETH: '0xcc4ED8cD7101B512B134360ED3cCB759caB33f17',
      OVERTIME: '0xB4199DC163F3206643649E117A816ad0DECb6C3B',
      cbBTC: '0x8d4f838327DedFc735e202731358AcFc260c207a'
    },
    DIGITAL_POOLS: {
      USDC: '0x5713ab44042D92C642444bd2F0fee9c2336F9E3b'
    }
  }
}

module.exports = CONTRACTS

# disaster management
#### hardhat deployed smartcontract

## tech Stack:
- solidity 
- hardhat
- react

**1.** git clone
```git clone
git clone <repo-url>
```

**2.** node_modules
```
yarn 
or 
npm i 
```
**3.** dev
navigate to source folder 
``` dev
yarn dev
or 
npm run dev
```

## hardhat
``` hardhat
"scripts": {
    "compile": "npx hardhat compile", //to compile the contract
    "deploy": "npx hardhat ignition deploy ./ignition/modules/DisasterManagement.js", //deployes the contract locally
    "nodes": "npx hardhat node", //local networks
    "network": "npx hardhat ignition deploy ./ignition/modules/DisasterManagement.js --network `fantomtest`" //deployes to the network
  },
```

`fantomtest`: change the name to what every network where you want to deploy
`FTM`: fanthom testnet symbol.

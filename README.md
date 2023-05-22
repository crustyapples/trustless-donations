<h1>trustless donations.</h1>

Trustless Donations is an innovative application designed to revolutionize the process of charitable donations. It facilitates a transparent flow of donations from donors to charities to suppliers, promoting transparency for all parties involved. By leveraging blockchain technology and smart contracts, Trustless Donations ensures the integrity and accountability of every transaction.

<img width="1432" alt="image" src="https://github.com/crustyapples/trustless-donations/assets/24990448/9b6e3559-1dd1-4446-95d1-ff8003ad5d47">


<b>Tools used: </b>

- thirdweb [Typescript](https://portal.thirdweb.com/typescript) and [React](https://portal.thirdweb.com/react) SDKs to interact with our smart contract

- [Solidity](https://docs.soliditylang.org/en/v0.8.14/), [Hardhat](https://hardhat.org/), and [thirdweb deploy](https://portal.thirdweb.com/thirdweb-deploy) to develop, test, and deploy our smart contract.

<br />

<b>Run the Application:</b>

To run the web application, change directories into `application`:

```bash
cd application
```

Then, run the development server:

```bash
npm install # Install dependencies first

npm run dev
```

Visit the application at [http://localhost:3000/](http://localhost:3000/).

<br />

<h2 align='center'>How to use this template</h2>

This template has two components:

1. The smart contract development in the [contract folder](./contract).
2. The web application in the [application folder](./application).

<h3>Deploying the contract</h3>

To deploy the contracts, change directories into the `contract` folder:

```bash
cd contract
```

Use [thirdweb deploy](https://portal.thirdweb.com/thirdweb-deploy) to deploy the contract:

```bash
npm install # Install dependencies first
npx thirdweb deploy
```

Complete the deployment flow by clicking the generated link and using the thirdweb dashboard to choose your network and configuration.

<h3>Using Your Contract</h3>

Inside the [home page](./application/pages/index.js) of the web application, connect to your smart contract inside the [`useContract`](https://portal.thirdweb.com/react/react.usecontract#usecontract-function) hook:

```jsx
// Get the smart contract by it's address
const { contract } = useContract("0x..."); // Your contract address here (from the thirdweb dashboard)
```

We configure the desired blockchain/network in the [`_app.js`](./application/pages/_app.js) file; be sure to change this to the network you deployed your contract to.

```jsx
// This is the chain your dApp will work on.
const activeChain = "goerli";
```

Now we can easily call the functions of our [`Greeter`](./contract/Greeter.sol) contract, such as the `greet` and `setGreeting` contract by using the [useContractData](https://portal.thirdweb.com/react/react.usecontractdata) hook to read, and the [useContractCall](https://portal.thirdweb.com/react/react.usecontractcall) hook to write data.

```jsx
// Read the current greeting
const { data: currentGreeting, isLoading } = useContractData(contract, "greet");

// Write a new greeting
const { mutate: writeGreeting, isLoading: isWriting } = useContractCall(
  contract,
  "setGreeting"
);
```

### Connecting to user wallets

To perform a "write" operation (a transaction on the blockchain), we need to have a connected wallet, so we can use their **signer** to sign the transaction.

To connect a user's wallet, we use one of thirdweb's [wallet connection hooks](https://portal.thirdweb.com/react/category/wallet-connection). The SDK automatically detects the connected wallet and uses it to sign transactions. This works because our application is wrapped in the [`ThirdwebProvider`](https://portal.thirdweb.com/react/react.thirdwebprovider), as seen in the [`_app.js`](./application/pages/_app.js) file.

## What's next?

Learn how to use thirdweb's [Contract Extensions](https://portal.thirdweb.com/thirdweb-deploy/contract-extensions) to create your own NFT Collection smart contract + application in our [next template](https://replit.com/@thirdweb/Create-an-NFT-collection-with-Solidity-thirdweb#.replit).


## Presentation

```
Evm Broadcaster is a simple NestJS application that allows to broadcast transactions on evm chains
```

## Installation

```bash
$ npm install
```

## Setting the environment
  
1. create a **.env** file
2. define **PROVIDER_URL** variable. You can easily set it up on [Alchemy](https://www.alchemy.com/) or [Infura](https://www.infura.io/)
3. define **MNEMONIC** variable. [here](https://getcoinplate.com/bip39-seed-phrase-mnemonics-generator-offline-online-tool/)
4. optional: define a different to run on (by default 10000)  

For example:  
```
PORT=10000
PROVIDER_URL = https://eth-goerli.g.alchemy.com/v2/{API_KEY}
MNEMONIC = finish upgrade skirt march inquiry tent high toward flame near poverty media tip salute hill firm invest truly cycle hurdle wagon raven sad pole
```

## Running the app

```bash
$ npm run start
```
### Get your address
```bash
$ curl localhost:{PORT}
```

### Send 0.01 Eth to {DESTINATION_ADDRESS}
```bash
$ curl -X POST -H "Content-Type: application/json" localhost:10000 -d '{"address": {DESTINATION_ADDRESS}, "amount": "0.01"}'
```

If you need some eth on Goerli test network, you may use [Alchemy Faucet](https://goerlifaucet.com/)


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).

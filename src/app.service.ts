import { Injectable } from '@nestjs/common';
import { BroadcastDto } from './app.dto';
import { ethers, HDNodeWallet, parseEther } from "ethers";

@Injectable()
export class AppService {
    private wallet: HDNodeWallet; 

    constructor() {
        const provider = new ethers.JsonRpcProvider(process.env.PROVIDER_URL)
        this.wallet = ethers.Wallet.fromPhrase(process.env.MNEMONIC, provider)
    }

    getAddress() {
        return this.wallet.address
    }

    async broadcastTxn(body: BroadcastDto): Promise<ethers.TransactionResponse> {
        const value = parseEther(body.amount.toString())
        const txn = await this.wallet.sendTransaction({to: body.address, value })
        return txn.getTransaction()
    }
}

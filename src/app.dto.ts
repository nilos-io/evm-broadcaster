import { IsEthereumAddress, IsPositive } from 'class-validator'

export class BroadcastDto {
    @IsEthereumAddress()
    address: string

    @IsPositive()
    amount: number
}
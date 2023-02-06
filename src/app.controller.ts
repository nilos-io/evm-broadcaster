import { Body, Controller, Get, Post } from '@nestjs/common';
import { BroadcastDto } from './app.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getAddress() {
        return this.appService.getAddress();
    }

    @Post()
    broadcastTxn(@Body() body: BroadcastDto) {
        return this.appService.broadcastTxn(body);
    }
}

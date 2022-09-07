import { Controller, Get, Post, Param, Body, UseGuards  } from '@nestjs/common';
import { ResponseUtil } from '@/utils/response';
// @ts-ignore
import { AuthGuard } from '@nestjs/passport';

import { SignService } from './service';

@Controller('sign')
export class SignController {
    constructor(
        private readonly signService: SignService,
        private readonly responseUtil: ResponseUtil
    ){}

    @Get('all')
    async getBlogById(@Param('id') id: number){
        const signs = await this.signService.getAll();
        return this.responseUtil.getResponse({data: signs})
    }
}

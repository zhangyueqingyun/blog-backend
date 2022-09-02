import { Controller, UseGuards, Post, Request } from '@nestjs/common';
import { ResponseUtil } from '@/utils/response';

import { UserService } from './service';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService,
        private readonly responseUtil: ResponseUtil
    ){}

    // @UseGuards(AuthGuard('local'))
    // @Post('login')
    // async login(@Request() req) {
    //   const result = this.userService.getUserByUsername('admin')
    //   return this.responseUtil.getResponse(req.user);
    // }
}


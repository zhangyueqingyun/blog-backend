import { Controller, Get } from '@nestjs/common'
import { ProfileService, Profile } from '@/profile/service'
import {ResponseUtil, Response} from '@/utils/response'

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService, private readonly responseUtil: ResponseUtil) {}

    @Get()
    async getProfile(): Promise<Response> {
        const profile = await this.profileService.getProfile()
        return this.responseUtil.getResponse({data: profile})
    }
}
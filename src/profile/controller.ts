import { Controller, Get } from '@nestjs/common'
import { ProfileService, Profile } from '@/profile/service'
import {ResponseUtil, Response} from '@/utils/response'

@Controller()
export class ProfileController {
    constructor(private readonly profileService: ProfileService, private readonly responseUtil: ResponseUtil) {}

    @Get('profile')
    getProfile(): Response {
        const profile = this.profileService.getProfile()
        return this.responseUtil.getResponse(profile)

    }
}
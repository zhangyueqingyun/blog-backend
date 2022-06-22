import {Module} from '@nestjs/common'
import {ProfileController} from '@/profile/controller'
import {ProfileService} from '@/profile/service'

import {ResponseUtil} from '@/utils/response'
@Module({
    imports: [],
    controllers: [ProfileController],
    providers: [ProfileService,ResponseUtil]
})
export class ProfileModule {}
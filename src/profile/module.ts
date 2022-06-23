import {Module} from '@nestjs/common'
import {TypeOrmModule} from '@nestjs/typeorm'
import {ProfileController} from '@/profile/controller'
import {ProfileService} from '@/profile/service'
import {ProfileEntity} from '@/profile/entity'
import {ResponseUtil} from '@/utils/response'
@Module({
    imports: [
        TypeOrmModule.forFeature([ProfileEntity])
    ],
    controllers: [ProfileController],
    providers: [ProfileService,ResponseUtil]
})
export class ProfileModule {}
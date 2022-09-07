import {Module} from '@nestjs/common'
import {SignController} from '@/sign/controller'
import {SignService} from '@/sign/service'
import {ResponseUtil} from '@/utils/response'
import {TypeOrmModule} from '@nestjs/typeorm'

import {SignEntity} from './entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([SignEntity])
    ],
    controllers: [SignController],
    providers: [SignService, ResponseUtil],
    exports: [SignService]
})
export class SignModule {

}
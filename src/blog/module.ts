import {Module} from '@nestjs/common'
import {BlogController} from '@/blog/controller'
import {BlogService} from '@/blog/service'
import {ResponseUtil} from '@/utils/response'
import {BlogStorage} from '@/utils/oss'
import {TypeOrmModule} from '@nestjs/typeorm'

import {BlogEntity} from './entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([BlogEntity])
    ],
    controllers: [BlogController],
    providers: [BlogService, BlogStorage, ResponseUtil],
    exports: [BlogService]
})
export class BlogModule {

}
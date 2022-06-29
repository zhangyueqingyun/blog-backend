import {Module} from '@nestjs/common'
import {BlogController} from '@/blog/controller'
import {BlogService} from '@/blog/service'
import {ResponseUtil} from '@/utils/response'
import {BlogStorage} from '@/utils/oss'
import {TypeOrmModule} from '@nestjs/typeorm'

import {BlogEntity} from './entities/blog'
import {CategoryEntity} from './entities/category'
import {SignEntity} from './entities/sign'

@Module({
    imports: [
        TypeOrmModule.forFeature([BlogEntity, CategoryEntity, SignEntity])
    ],
    controllers: [BlogController],
    providers: [BlogService, ResponseUtil, BlogStorage]
})
export class BlogModule {

}
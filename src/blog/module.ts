import {Module} from '@nestjs/common'
import {BlogController} from '@/blog/controller'
import {BlogService} from '@/blog/service'
import {ResponseUtil} from '@/utils/response'
@Module({
    controllers: [BlogController],
    providers: [BlogService, ResponseUtil]
})
export class BlogModule {

}
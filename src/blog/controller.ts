import {Controller, Get} from '@nestjs/common'
import {BlogService} from '@/blog/service'
import {ResponseUtil, Response} from '@/utils/response'
@Controller()
export class BlogController {
    constructor(private readonly blogService: BlogService, private readonly responseUtil: ResponseUtil){}
    
    @Get('news')
    async getCategories(): Promise<Response> {
        const categories = await this.blogService.getNews()
        return this.responseUtil.getResponse(categories)
    }
}
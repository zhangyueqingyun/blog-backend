import {Controller, Get} from '@nestjs/common'
import {BlogService} from '@/blog/service'
import {ResponseUtil, Response} from '@/utils/response'
@Controller()
export class BlogController {
    constructor(private readonly blogService: BlogService, private readonly responseUtil: ResponseUtil){}
    
    @Get('categories')
    getCategories(): Response {
        const categories = this.blogService.getCategorys()
        return this.responseUtil.getResponse(categories)
    }
}
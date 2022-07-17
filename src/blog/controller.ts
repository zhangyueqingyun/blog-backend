import {Controller, Get, Post, Param, Body} from '@nestjs/common'
import {BlogService} from '@/blog/service'
import {ResponseUtil, Response} from '@/utils/response'

@Controller('blog')
export class BlogController {
    constructor(private readonly blogService: BlogService, private readonly responseUtil: ResponseUtil){}
    
    @Get('news')
    async getCategories(): Promise<Response> {
        const {blogs, categories, signs} = await this.blogService.getNews()
        const categoriedBlogs = getCategoriedBlogs(blogs, signs)

        const data = categories.filter(category => {
            return !!(category.blogs = categoriedBlogs[category.id])
        })

        return this.responseUtil.getResponse({data})
    }

    @Get(':id')
    async getBlogById(@Param('id') id: number){
        const blog = await this.blogService.getBlogById(id)
        return this.responseUtil.getResponse({data: blog})
    }

    @Post('add')
    async addBlog(@Body() createBlogDto: CreateBlogDto) {
        await this.blogService.createBlog(createBlogDto)
        return this.responseUtil.getResponse({message: '新增成功'})
    }
}

interface CreateBlogDto {
    title: String,
    description: String,
    datetime: String,
    ossPath: String,
    signIds: String,
    categoryId: String,
    id?: number
}

function mapSignsToBlog(blog, signs){
    const {signIds} = blog
    delete blog.signIds
    blog.signs = signIds.split(',').map(signId => (signs.find(sign => (sign.id == signId))))
}

function getCategoriedBlogs(blogs, signs) {
    const categoriedBlogs = {}
    for(let blog of blogs){
        mapSignsToBlog(blog, signs)

        const {categoryId} = blog
        delete blog.categoryId
        
        categoriedBlogs[categoryId] ??= []
        categoriedBlogs[categoryId].push(blog)
    }
    return categoriedBlogs
}
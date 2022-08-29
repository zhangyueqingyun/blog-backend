import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ResponseUtil, Response } from '@/utils/response';

import { BlogService } from './service';
import { CategoryService } from '@/category/service';

@Controller('blog')
export class BlogController {
    constructor(
        private readonly blogService: BlogService,
        private readonly responseUtil: ResponseUtil
    ){}

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
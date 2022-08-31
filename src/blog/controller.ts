import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ResponseUtil, Response } from '@/utils/response';

import { BlogService } from './service';

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
        await this.blogService.updateBlog(createBlogDto)
        return this.responseUtil.getResponse({message: '新增成功'})
    }

    @Post('edit')
    async editBlog(@Body() createBlogDto: CreateBlogDto) {
        await this.blogService.updateBlog(createBlogDto)
        return this.responseUtil.getResponse({message: '新增成功'})
    }

    @Post('delete/:id')
    async deleteCategory(@Param('id') id: number) {
        await this.blogService.deleteBlog(id)
        return this.responseUtil.getResponse({message: '删除成功'})
    }
}

interface CreateBlogDto {
    title?: String,
    description?: String,
    datetime?: String,
    ossPath?: String,
    categoryId?: String,
    id?: number
}

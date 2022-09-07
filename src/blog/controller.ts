import { Controller, Get, Post, Param, Body, UseGuards  } from '@nestjs/common';
import { ResponseUtil } from '@/utils/response';
// @ts-ignore
import { AuthGuard } from '@nestjs/passport';

import { BlogService } from './service';

@Controller('blog')
export class BlogController {
    constructor(
        private readonly blogService: BlogService,
        private readonly responseUtil: ResponseUtil
    ){}

    @Get('read/:id')
    async read(@Param('id') id: number){
        await this.blogService.read(id);
        return this.responseUtil.getResponse();
    }

    @Get(':id')
    async getBlogById(@Param('id') id: number){
        const blog = await this.blogService.getBlogById(id)
        return this.responseUtil.getResponse({data: blog})
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    async addBlog(@Body() createBlogDto: CreateBlogDto) {
        await this.blogService.updateBlog(createBlogDto)
        return this.responseUtil.getResponse({message: '新增成功'})
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('edit')
    async editBlog(@Body() createBlogDto: CreateBlogDto) {
        await this.blogService.updateBlog(createBlogDto)
        return this.responseUtil.getResponse({message: '编辑成功'})
    }

    @UseGuards(AuthGuard('jwt'))
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

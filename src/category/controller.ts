import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { ResponseUtil, Response } from '@/utils/response';
import { CategoryService } from './service';
import { AuthGuard } from '@nestjs/passport';

@Controller('category')
export class CategoryController {
    constructor(
            private readonly categoryService: CategoryService, 
            private readonly responseUtil: ResponseUtil
    ) {}

    @Get('path/:categoryId')
    async getCategoryPath (@Param('categoryId') id: number): Promise <Response> {
        let path = await this.categoryService.getCategoryPath(id);
        return this.responseUtil.getResponse({data: path});
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('add')
    async addBlog(@Body() createCategoryDto: CreateCategoryDto) {
        await this.categoryService.updateCategory(createCategoryDto)
        return this.responseUtil.getResponse({message: '新增成功'})
    }

    
    @UseGuards(AuthGuard('jwt'))
    @Post('edit')
    async editBlog(@Body() createCategoryDto: CreateCategoryDto) {
        await this.categoryService.updateCategory(createCategoryDto)
        return this.responseUtil.getResponse({message: '编辑成功'})
    }

    @UseGuards(AuthGuard('jwt'))
    @Post('delete/:id')
    async deleteCategory(@Param('id') id: number) {
        await this.categoryService.deleteCategory(id)
        return this.responseUtil.getResponse({message: '删除成功'})
    }
}

interface CreateCategoryDto {
    name: String,
    parentId?: number,
    id?: number
}
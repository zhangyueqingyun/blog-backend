import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ResponseUtil, Response } from '@/utils/response';
import { CategoryService } from './service';

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

    @Post('add')
    async addBlog(@Body() createCategoryDto: CreateCategoryDto) {
        console.log('createCategoryDto', createCategoryDto);
        await this.categoryService.updateCategory(createCategoryDto)
        return this.responseUtil.getResponse({message: '新增成功'})
    }

    @Post('edit')
    async editBlog(@Body() createCategoryDto: CreateCategoryDto) {
        console.log('createCategoryDto', createCategoryDto);
        await this.categoryService.updateCategory(createCategoryDto)
        return this.responseUtil.getResponse({message: '编辑成功'})
    }

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
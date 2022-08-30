import { Controller, Get, Param } from '@nestjs/common';
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
}
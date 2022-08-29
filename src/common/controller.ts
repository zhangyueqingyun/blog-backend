import { Controller, Get, Param } from '@nestjs/common';
import { ResponseUtil, Response } from '@/utils/response';

import { CategoryService } from '@/category/service';
import { BlogService } from '@/blog/service';

@Controller('common')
export class CategoryController {
    constructor(
            private readonly categoryService: CategoryService, 
            private readonly blogService: BlogService, 
            private readonly responseUtil: ResponseUtil
    ) {}

    @Get('directory/:parentId')
    async getResoucesByParentId(@Param('parentId') parentId: number ): Promise<Response> {
        const [categories, blogs] = await Promise.all([
            this.categoryService.getResoucesByParentId(parentId),
            this.blogService.getBlogsByCategoryId(parentId)
        ]);
        return this.responseUtil.getResponse({data: {categories, blogs}});
    }

        
    @Get('news')
    async getCategories(): Promise<Response> {
        const blogs = await this.blogService.getNews();
        
        const categories = await this.categoryService.getCategoriesByIds(
            blogs.map(blog => blog.categoryId)
        );

        for(let blog of blogs) {
            const category: any = categories.find((category) => (category.id === blog.categoryId));
            category.blogs ??= [];
            category.blogs.push(blog);
        }

        return this.responseUtil.getResponse({data: categories});
    }
}
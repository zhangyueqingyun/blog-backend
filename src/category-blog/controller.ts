import { Controller, Get, Param } from '@nestjs/common';
import { ResponseUtil, Response } from '@/utils/response';

import { CategoryService } from '@/category/service';
import { BlogService } from '@/blog/service';

@Controller()
export class CategoryController {
    constructor(
            private readonly categoryService: CategoryService, 
            private readonly blogService: BlogService, 
            private readonly responseUtil: ResponseUtil
    ) {}

    @Get('category/:parentId')
    async getResoucesByParentId(@Param('parentId') parentId: number ): Promise<Response> {
        const [categories, blogs] = await Promise.all([
            this.categoryService.getCategoriesByParentId(parentId),
            this.blogService.getBlogsByCategoryId(parentId)
        ]);

        const data = [];

        for(const category of categories) {
            data.push({
                id: category.id,
                type: 'category',
                name: category.name           
            });
        }

        for(const blog of blogs) {
            data.push({
                type: 'blog',
                name: blog.title,
                ...blog
            });
        }

        return this.responseUtil.getResponse({data});
    }

    @Get('blog/path/:blogId')
    async getBlogPath(@Param('blogId') blogId: number): Promise<Response> {
        const blog = await this.blogService.getBlogInfoById(blogId);
        const path = await this.categoryService.getCategoryPath(blog.parentId);
        path.push({
            id: blog.id, 
            type: 'blog',
            name: blog.title
        });
        return this.responseUtil.getResponse({data: path});  
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

    @Get('navigation')
    async getNavigation(): Promise<Response> {
        let categories: any = await this.categoryService.getCategoriesByParentId(-1);
        categories = categories.map(category => ({
            id: category.id,
            name: category.name,
        }))
        return this.responseUtil.getResponse({data: categories});
    }
}
import { Controller, Get, Param } from '@nestjs/common';
import { ResponseUtil, Response } from '@/utils/response';

import { CategoryService } from './service';
import { BlogService } from '@/blog/service';

@Controller('category')
export class CategoryController {
    constructor(
            private readonly categoryService: CategoryService, 
            private readonly responseUtil: ResponseUtil
    ) {}
}
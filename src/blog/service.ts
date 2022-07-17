import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BlogEntity} from './entities/blog'
import {CategoryEntity} from './entities/category'
import {SignEntity} from './entities/sign'
import {BlogStorage} from '@/utils/oss'

export interface Sign {
    id: number,
    name: String,
    icon: string
}

export interface Blog {
    id: number,
    title: String,
    description: String,
    datetime: String,
    filename: string,
    sign: string
}

export interface Category {
    id: number,
    name: String,
    icon: string,
    blogs?: Blog
}

export interface News {

}


@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntity)
        private blogRepository: Repository<BlogEntity>,
        @InjectRepository(CategoryEntity)
        private categoryRepository: Repository<CategoryEntity>,
        @InjectRepository(SignEntity)
        private signRepository: Repository<SignEntity>,
        private readonly blogStorage: BlogStorage
    ){}

    async getNews(): Promise<any>{
        const [blogs, categories, signs] = await Promise.all([
            this.blogRepository.find(), 
            this.getCategories(),
            this.getSigns()
        ])

        return {
            blogs, categories, signs
        }
    }

    async createBlog(createBlogDto) {
        const blog = this.blogRepository.create(createBlogDto)
        await this.blogRepository.save(createBlogDto)
    }

    async getBlogById(id: number): Promise<any>{
        const result = await this.blogRepository.findOne({where:{id}})
        const content = await this.blogStorage.get(result.ossPath)
        return {
            ...result,
            content: content.toString()
        }
    }

    async getSigns(): Promise<any>{
        return this.signRepository.find()
    }

    async getCategories(): Promise<any>{
        return this.categoryRepository.find()
    }
}
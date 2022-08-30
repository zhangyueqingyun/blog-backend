import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {BlogEntity} from './entity'
import {BlogStorage} from '@/utils/oss'

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogEntity)
        private blogRepository: Repository<BlogEntity>,
        private readonly blogStorage: BlogStorage
    ){}

    async getNews(): Promise<any>{
        return this.blogRepository.find()
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

    async getBlogInfoById(id: number): Promise<any> {        
        return this.blogRepository.findOne({where:{id}});
    }

    async getBlogsByCategoryId(categoryId: number): Promise<any> {
        return this.blogRepository.find({where:{categoryId}});
    }
}
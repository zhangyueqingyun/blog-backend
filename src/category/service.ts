import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {CategoryEntity} from './entity'

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepositry: Repository<CategoryEntity>
  ){}

  async getResoucesByParentId(parentId: number): Promise<CategoryEntity []> {
    const categories = await this.categoryRepositry.find({where:{parentId}})
    return categories
  }

  async getCategoriesByIds(ids: number []): Promise<CategoryEntity []> {
    return this.categoryRepositry.find({where: ids.map(id => ({id}))});
  }
}
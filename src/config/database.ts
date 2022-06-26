import {ProfileEntity} from '@/profile/entity'
import {BlogEntity} from '@/blog/entities/blog'
import {CategoryEntity} from '@/blog/entities/category'
import {SignEntity} from '@/blog/entities/sign'
import {mysqlLocalConf} from '../../config/database'

export const mysqlConf: any = {
    ...mysqlLocalConf,
    entities: [ProfileEntity, BlogEntity, CategoryEntity, SignEntity],
    // synchronize: true
}
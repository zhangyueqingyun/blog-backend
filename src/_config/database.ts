import {ProfileEntity} from '@/profile/entity';
import {BlogEntity} from '@/blog/entity';
import {CategoryEntity} from '@/category/entity';
import {mysqlLocalConf} from '../../config/database';

export const mysqlConf: any = {
    ...mysqlLocalConf,
    entities: [ProfileEntity, BlogEntity, CategoryEntity],
    // synchronize: true
}
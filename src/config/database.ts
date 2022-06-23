import {ProfileEntity} from '@/profile/entity'
import {mysqlLocalConf} from '../../database'
export const mysqlConf: any = {
    ...mysqlLocalConf,
    entities: [ProfileEntity],
    // synchronize: true
}
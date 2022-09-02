import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {UserEntity} from '@/user/entity'
import {BlogStorage} from '@/utils/oss'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ){}

    async getUserByUsername(username: string): Promise<any>{
        return this.userRepository.findOne({where:{username}});
    }
}
import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {SignEntity} from './entity'

@Injectable()
export class SignService {
    constructor(
        @InjectRepository(SignEntity)
        private signRepository: Repository<SignEntity>
    ){}

    async getAll(): Promise<any>{
        return this.signRepository.find()
    }
}
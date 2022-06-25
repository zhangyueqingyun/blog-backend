import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import {ProfileEntity} from './entity'

export interface Profile  {
  id: number,
  avatar: String,
  name: String,
  mail: String,
  feeling: {
    ch: String,
    en: String
  }
}

function entityToView(profile): Profile {
  const {feeling_ch, feeling_en, ...rest} = profile
  rest.feeling = {
    ch: feeling_ch,
    en: feeling_en
  }
  return rest
}


@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileEntity)
    private profileRepositry: Repository<ProfileEntity>
  ){}

  async getProfile(): Promise<Profile> {
    const profile = await this.profileRepositry.find()
    return entityToView(profile)
  }
}
import {Injectable} from '@nestjs/common'
export interface Profile  {
  avatar: String,
  name: String,
  mail: String,
  feeling: {
    ch: String,
    en: String
  }
}
@Injectable()
export class ProfileService {
  getProfile(): Profile {
    return {
      avatar: 'https://zblog-images.oss-cn-hangzhou.aliyuncs.com/avatar.jpeg',
      name: '张玥卿云',
      mail: 'zhangyueqingyun@foxmail.com',
      feeling: {
        ch: '追梦,成为世界一流的程序员',
        en: 'Chasing my dream. To be the best programmer all over the world.'
      }
    }
  }
}
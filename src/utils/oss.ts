const OSS = require('ali-oss')
import {ossLocalConf} from '@/_config/oss'
import {Injectable} from '@nestjs/common'

@Injectable()
export class BlogStorage {
    client: any
    constructor() {
        this.init()
    }

    init () {
        this.client = new OSS(ossLocalConf)
    }

    async get (ossPath: string) {
        try {
            const {content} = await this.client.get(ossPath)
            return content.toString()
        } catch (e){
            console.error(e)
        }
    }
}
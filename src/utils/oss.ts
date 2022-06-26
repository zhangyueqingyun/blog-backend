import OSS from 'ali-oss'
import {ossLocalConf} from '@/config/oss'

export class BlogStorage{
    client: any
    constructor() {
        this.init()
    }

    init () {
        this.client = new OSS(ossLocalConf)
    }

    async get (name) {
        try {
            const {content} = await this.client.get(name)
        } catch (e){
            console.error(e)
        }
    }
}
import OSS from 'ali-oss'
import {ossConf} from '../../config/oss'

export class BlogStorage{
    client: any
    constructor() {
        this.init()
    }

    init () {
        this.client = new OSS(ossConf)
    }

    async get (name) {
        try {
            const {content} = await this.client.get(name)
        } catch (e){
            console.error(e)
        }
    }
}
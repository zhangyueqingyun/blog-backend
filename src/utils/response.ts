import {Injectable} from '@nestjs/common'

export interface Response {
    code?: Number,
    message?: String,
    data?: any
}

@Injectable() 
export class ResponseUtil  {
    getResponse(response : Response = {}): Response{
        const {data, code = 20000, message = '请求成功'} = response
        return { code, message, data }
    }
    getServerErrorResponse(response?: Response): Response {
        const {data, code = 50000, message = '服务端错误'} = response
        return { code, message, data }
    }
    getClientErrorResponse(response?: Response): Response {
        const {data, code = 40000, message = '客户端错误'} = response
        return { code, message, data }
    }
}
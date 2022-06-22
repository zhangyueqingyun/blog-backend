import {Injectable} from '@nestjs/common'

export interface Response {
    code: Number,
    message: String,
    data: any
}


@Injectable() 
export class ResponseUtil  {
    getResponse(data: any, code = 20000, message='success'): Response{
        return {
            code,
            message,
            data
        }
    }

}
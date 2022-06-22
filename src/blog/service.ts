import {Injectable} from '@nestjs/common'

export interface Label {
    id: String,
    name: String,
}

export interface Blog {
    id: String,
    title: String,
    description: String,
    date: String,
    labels: Label[]
}

export interface Category {
    id: String,
    name: String,
    blogs: Blog[]
}

@Injectable()
export class BlogService {
    getCategorys(): Category[] {
        return [{
            id: 'technich',
            name: '技术',
            blogs: [
                {
                    id: 'asdfsdfsfd',
                    title: '几句话说清浏览器渲染过程',
                    description: 'Webkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。',
                    date: '2022-06-21 10:24:00',
                    labels: [{
                        id: 'webkit',
                        name: 'Webkit'
                    }]
                },
                {
                    id: 'asdfsdfsfd22',
                    title: '几句话说清浏',
                    description: '由苹果公司开发，负责将网页数据渲染为图像。',
                    date: '2022-06-22 10:14:00',
                    labels: [{
                        id: 'webkit1',
                        name: 'Webkit'
                    }]
                }
            ]
        },
        {
            id: 'technich2',
            name: '生活',
            blogs: [
                {
                    id: 'asdfsdfsfd',
                    title: '几句话说清浏览器渲染过程',
                    description: 'Webkit 是 Safari 浏览器的内核（渲染引擎），由苹果公司开发，负责将网页数据渲染为图像。',
                    date: '2022-06-21 10:24:00',
                    labels: [{
                        id: 'webkit',
                        name: 'Webkit'
                    }]
                }
            ]
        }]
    }
}
# blog-backend
我的个人博客后端项目。

## 1. 配置
由于部分隐私信息不能泄露，请在本地创建以下数据库配置文件。

在项目根目录下添加 config/database.ts 文件
~~~javascript
/**
 * @filepath config/database
 */
export const mysqlLocalConf: any = {
    type: 'mysql',
    host: 'host',
    port: 3306,
    username: 'username',
    password: 'password',
    database: 'zblog'
}
~~~
数据库创建和表的初始化 SQL 日后更新

## 2. 已有接口

1. 获取个人信息

/api/profile 

2. 获取某一篇博客内容

/api/blog/:id

3. 新增一篇博客

/api/blog/add

4. 获取某类别下的所有类别及博客

/api/category/:parentId 

5. 获取最新的博客内容

/api/news 

6. 获取类别路径
/api/category/path/:categoryId 

7. 获取博客路径
/api/blog/path/:blogId


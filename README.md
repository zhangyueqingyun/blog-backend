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

接口 | 描述 
---- | ---- 
/api/profile | 获取个人信息 
/api/navigation | 获取导航信息
/api/news | 获取最新内容 
/api/blog/:id | 获取某一篇博客内容 
/api/blog/add | 新增博客
/api/blog/edit | 编辑博客
/api/blog/delete/:id | 删除博客
/api/blog/path/:blogId | 获取博客路径
/api/category/:parentId  | 获取某类别下的所有类别及博客
/api/category/path/:categoryId | 获取类别路径
/api/category/add | 新增分类
/api/category/add | 编辑分类分类
/api/category/delete | 删除分类

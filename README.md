# blog-backend
我的个人博客后端项目。

## 配置
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

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

方法 | 接口 | 描述 | 是否需要权限
---- | ---- | ---- | ----
POST | /api/auth/login | 登录 | 是
GET | /api/profile | 获取个人信息 | 是
GET | /api/navigation | 获取导航信息 | 是
GET | /api/news | 获取最新内容 | 是
GET | /api/blog/:id | 获取某一篇博客内容 | 是
POST | /api/blog/add | 新增博客 | 否
POST | /api/blog/edit | 编辑博客 | 否
POST | /api/blog/delete/:id | 删除博客 | 否
GET | /api/blog/path/:blogId | 获取博客路径 | 是
GET | /api/category/:parentId  | 获取某类别下的所有类别及博客 | 是
GET | /api/category/path/:categoryId | 获取类别路径 | 是
POST | /api/category/add | 新增分类 | 否
POST | /api/category/add | 编辑分类分类 | 否
POST | /api/category/delete | 删除分类 | 否

## 3. nginx 配置

```
user root;

http {
    # enable gzip    
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 5;
    gzip_types text/plain application/javascript application/x-javascript text/javascript text/xml text/css;
    gzip_disable "MSIE [1-6]\.";
    gzip_vary on;

    server {
        listen       80;
        listen       [::]:80;
        server_name  _;
        
        # redirect to https
        return 301 https://$http_host$request_uri;
    }

    # Settings for a TLS enabled server.
    server {
        listen       443 ssl http2;
        listen       [::]:443 ssl http2;
        server_name  _;

        ssl_certificate "cert.d/your-cert.pem";
        ssl_certificate_key "cert.d/your-cert.key";
        
        root /root;
        
        location ^~ /management {
            alias  /root/blog-management/;
            index index.html;
            try_files $uri $uri/ /blog-management/;
        }
        
        location ^~ /zblog {
            alias  /root/blog-frontend/;
            index index.html;
            try_files $uri $uri/ /blog-frontend/;
        }

        location ~ /api/ {
            proxy_pass http://127.0.0.1:9000;
        }

        location = / {
            rewrite ^/ /zblog;
        }
    }
}
```

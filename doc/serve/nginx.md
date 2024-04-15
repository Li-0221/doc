[视频链接](https://www.bilibili.com/video/BV1MS4y167GN/?p=87&vd_source=f0dd6fca300bb22c9819d00a25af348a)

- 正向代理：隐蔽客户端，由代理服务器接收客户端的请求，再转发给服务器。如翻墙工具。

- 反向代理：隐蔽服务器，由代理服务器接收服务器的请求，再转发给客户端。如负载均衡。

# 指令

!> 以下指令均在 Nginx 安装目录下执行，Nginx 目录不能含有特殊字符和中文。

查看版本 `nginx -V`

启动 `nginx`

停止 `nginx -s stop`

重启 `nginx -s reload`

退出 `nginx -s quit`

# 配置

```nginx
worker_processes auto;

events {
    worker_connections 1024;
}

http {
    include mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;

    #开启gzip
    gzip on;
    #最小压缩文件大小1字节
    gzip_min_length 1;
    #压缩级别，1-10，数字越大压缩的越好，也越占用CPU时间
    gzip_comp_level 3;
    #进行压缩的文件类型
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;


    # 服务1  www.lidoc.top访问3000端口
    server {
        #监听端口（域名的端口，不是服务器的端口）
        listen 80;
        #域名
        server_name www.lidoc.top;
        #处理 / 的请求
        location / {
            # c:/User/dist  路径中开头不能为t
            # 保险起见，将路径改为 c:\\User\\dist
            root c:\\User\\dist;

            index index.html index.html;
        }

        #处理 /api 的请求（对接口做代理）
        location /api {
            # 代理地址（转发的目标服务器地址）
            proxy_pass http://59.56.122.331;
        }

        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root html;
        }
    }

    # 服务2  sicily.lidoc.top访问4000端口
    server {
        listen 80;
        server_name sicily.lidoc.top; #域名或服务器ip
        location / {
            proxy_pass http://localhost:4000;
            root html;
            index index.html index.htm;
        }
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
            root html;
        }
    }
}
```

# 负载均衡

nginx 接收到客户端的请求，转发到不同服务器处理

## 轮询

> 适合用于两台服务器配置相同

两台服务器轮流处理进来的请求。

第一个服务器处理第一个请求，第二个服务器处理第二个请求，第一个服务器处理第三个请求，以此类推。

```nginx
http {
  upstream guigu{
    server localhost:3000; #服务器1
    server localhost:4000; #服务器2
  }
}
```

## 加权轮询

> 适合用于两台服务器配置不同

两台服务器轮流处理进来的请求，但是第二台服务器处理的请求是第一台服务器处理请求的 3 倍。

第一个服务器处理第一个请求，第二个服务器处理第二、三、四个请求，第一个服务器处理第五个请求，以此类推。

```nginx
http {
  upstream guigu{
    server localhost:3000 weight=1; #服务器1
    server localhost:4000 weight=3; #服务器2
  }
}
```

## 会话保持

同样的 ip 访问的是一个服务器。利于缓存。

```nginx
http {
  upstream guigu{
    ip_hash;
    server localhost:3000; #服务器1
    server localhost:4000; #服务器2
  }
}
```

## 动态调度

根据后端节点服务器的相应时间来分配请求，响应时间短的优先分配。

!> 需要下载 nginx 的 upstream_fair 模块

```nginx
http {
  upstream guigu{
    fair;
    server localhost:3000; #服务器1
    server localhost:4000; #服务器2
  }
}
```
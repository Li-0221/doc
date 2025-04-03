# docker

Dockerfile 中的构建、生产阶段是分离的

服务器中安装 [docker](https://docs.docker.com/engine/install/)

# 前端

## Dockerfile

```dockerfile
# 第一阶段：构建阶段
FROM node:20-alpine AS build-stage

WORKDIR /app
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN npm config set registry https://registry.npmmirror.com

COPY .npmrc package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

#========================================



# 第二阶段：生产阶段
FROM nginx:stable-alpine AS production-stage

# 将构建的文件 /app/dist 复制到nginx的 /usr/share/nginx/html 目录
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

```

## dockerignore

```dockerignore
node_modules
.DS_Store
dist
dist-ssr
*.local
.eslintcache
report.html

yarn.lock
npm-debug.log*
.pnpm-error.log*
.pnpm-debug.log
tests/**/coverage/

# Editor directories and files
.idea
*.suo
*.ntvs*
*.njsproj
*.sln
tsconfig.tsbuildinfo

```

# nest

## Dockerfile

```dockerfile
# 第一阶段：构建阶段
FROM node:20-alpine AS builder

# 安装系统依赖（Prisma需要的）
RUN apk add --no-cache openssl ca-certificates

WORKDIR /app

# 安装 PNPM
RUN corepack enable && corepack prepare pnpm@latest --activate

# 先复制包管理文件
COPY package.json pnpm-lock.yaml* .npmrc* ./

# 安装所有依赖（包括devDependencies）
RUN pnpm install --frozen-lockfile

# 复制Prisma相关文件
COPY prisma ./prisma

# 生成Prisma客户端
RUN pnpm prisma generate

# 复制其他源代码
COPY . .

# 构建项目
RUN pnpm build

#==================================================

# 第二阶段：生产镜像
FROM node:20-alpine AS production

WORKDIR /app

# 安装系统依赖（Prisma需要的）
RUN apk add --no-cache openssl ca-certificates

# 安装 PM2
RUN npm install pm2 -g

# 复制必要的文件
# 从builder阶段复制/app/node_modules到当前目录下的/node_modules
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/ecosystem.config.js ./

# 暴露端口（根据你的实际端口修改）
EXPOSE 3000

# 健康检查
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD wget -q -O - http://localhost:3000/health || exit 1

CMD ["pm2-runtime", "ecosystem.config.js"]
```

## dockerignore

```dockerignore
**/.classpath
**/.dockerignore
**/.env
**/.git
**/.gitignore
**/.project
**/.settings
**/.toolstarget
**/.vs
**/.vscode
**/.next
**/.cache
**/*.*proj.user
**/_.dbmdl
\*\*/_.jfm
**/charts
**/docker-compose*
\*\*/compose.y*ml
**/Dockerfile\*
**/node_modules
**/npm-debug.log
**/obj
**/secrets.dev.yaml
**/values.dev.yaml
**/build
**/dist
LICENSE
README.md

```

# docker-compose

TODO

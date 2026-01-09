# Git 检查

配置 git 提交时对代码进行校验

1. 提交信息是否符合 Angular 规范
2. 代码是否符合 eslint 规范
3. 代码中是否无 ts 报错

满足以上要求，代码才能正常提交到 git

## 生成提交信息

生成符合 Angular 规范的 git 提交信息，校验 git 的提交信息是否符合 Angular 规范

### 安装

SoybeanJS 的命令行工具

```bash
pnpm i -D @soybeanjs/cli
```

此处主要使用 `git-commit` `git-commit-verify`

更多使用方式参考 https://github.com/soybeanjs/cli/blob/main/README.md

## 代码检查

### lint-staged

安装 `lint-staged`:

```bash
pnpm i lint-staged -D
```

在 `package.json` 中添加:

```json
{
  "lint-staged": {
    "*": "eslint --fix"
  }
}
```

### simple-git-hooks

安装 `simple-git-hooks`:

```bash
pnpm i simple-git-hooks -D
```

在 `package.json` 中添加git钩子:

```json
{
  "simple-git-hooks": {
    "commit-msg": "pnpm soy git-commit-verify",
    "pre-commit": "pnpm typecheck && pnpm lint-staged"
  }
}
```

在 `package.json` 中添加脚本:

```json
{
  "scripts": {
    // vue
    "typecheck": "vue-tsc --noEmit --skipLibCheck",
    // Nuxt
    "typecheck": "nuxi typecheck",
    "commit": "soy git-commit",
    "commit:zh": "soy git-commit -l=zh-cn",
    "prepare": "simple-git-hooks"
  }
}
```

> tip 提示
变更 `simple-git-hooks` 配置或取消 `simple-git-hooks` 时，先更改 `package.json` 中的`simple-git-hooks`对应的配置，然后运行 `pnpm run prepare`使其生效。


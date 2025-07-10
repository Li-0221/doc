const fs = require("fs").promises;
const path = require("path");

async function findMdFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const mdFiles = [];

  for (const entry of entries) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subMdFiles = await findMdFiles(entryPath);
      mdFiles.push(...subMdFiles);
    } else if (entry.isFile() && path.extname(entry.name) === ".md") {
      mdFiles.push(entryPath);
    }
  }

  return mdFiles;
}

async function main() {
  const cwd = process.cwd();
  const docDir = path.join(cwd, "doc");

  try {
    await fs.access(docDir);
  } catch (err) {
    console.error(`错误：目录 '${docDir}' 不存在。`);
    return;
  }

  try {
    const mdFiles = await findMdFiles(docDir);
    if (mdFiles.length > 0) {
      const arr = ["README.md"];
      mdFiles.forEach((file) => {
        // 转换为以 "doc" 开头的相对路径
        const relativePath = path.relative(cwd, file);
        console.log(relativePath);
        arr.push(relativePath);
      });
      console.log(arr);
    } else {
      console.log(`在 '${docDir}' 目录下未找到 .md 文件。`);
    }
  } catch (err) {
    console.error("读取目录时出错：", err.message);
  }
}

main();

#!/usr/bin/env node
var glob = require('glob');
var fs = require('fs-extra');
var chalk = require('chalk');
console.log(process.argv);
const pattern = process.argv[2];
const options = {}
console.log(`开始删除 ${pattern} 文件`);
glob(pattern, options, function (err, dirs) {
  Promise.all(dirs.map(dir => fs.rm(dir, { recursive: true }))).then(() => {
    console.log(`删除任务${chalk.green('成功')}`);
  }).catch(err => {
    console.log(`删除任务${chalk.red('失败')}`, err);
  });
})

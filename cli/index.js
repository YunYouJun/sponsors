#!/usr/bin/env node
const { program } = require("commander");
const pkg = require("../package.json");
const yaml = require("js-yaml");
const fs = require("fs");

const inquirer = require("inquirer");
inquirer.registerPrompt("datetime", require("inquirer-datepicker-prompt"));

program.version(pkg.version);

const dataFile = "./public/data/sponsors.yml";
const questions = [
  {
    type: "input",
    name: "name",
    message: "赞助者名称：",
  },
  {
    type: "input",
    name: "url",
    message: "赞助者链接：",
  },
  {
    type: "datetime",
    name: "date",
    message: `赞助日期：`,
    format: ["yyyy", "-", "mm", "-", "dd"],
  },
  {
    type: "list",
    name: "method",
    message: "赞助方式：",
    choices: ["微信支付", "支付宝", "QQ 转账", "QQ 红包", "其他"],
  },
  {
    type: "number",
    name: "amount",
    message: "赞助金额：",
  },
  {
    type: "string",
    name: "memo",
    message: "备注内容：",
  },
];

program.command("add").action(async () => {
  const answers = await inquirer.prompt(questions);
  const item = yaml.dump([answers]);
  console.log(item);
  fs.appendFileSync(dataFile, item);
});

program.parse(process.argv);

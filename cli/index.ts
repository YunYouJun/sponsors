#!/usr/bin/env node
import { program } from "commander";
import pkg from "../package.json";
import yaml from "js-yaml";
import fs from "fs";

import inquirer from "inquirer";
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
    choices: ["微信支付", "支付宝", "QQ 钱包", "其他"],
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

export async function run() {
  program.parse(process.argv);
}

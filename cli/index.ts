#!/usr/bin/env node
import { program } from "commander";
import pkg from "../package.json";
import yaml from "js-yaml";
import fs from "fs";

import inquirer from "inquirer";
import { MoneyMethod, SponsorMethod } from "../src/types";
import { EnumKeys } from "../src/types/helper";
inquirer.registerPrompt("datetime", require("inquirer-datepicker-prompt"));

program.version(pkg.version);

let sponsorMethods: SponsorMethod[] = EnumKeys(MoneyMethod).map(
  (item) => MoneyMethod[item]
);
sponsorMethods.push("其他");

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
    choices: sponsorMethods,
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
  // for debug
  console.log(item);
  fs.appendFileSync(dataFile, item);
});

export async function run() {
  program.parse(process.argv);
}

import yaml from "js-yaml";
import fs from "fs";

import inquirer from "inquirer";
import { MoneyMethod, SponsorMethod } from "../src/types";
import { EnumKeys } from "../src/types/helper";

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

export async function onAdd() {
  const answers = await inquirer.prompt(questions);
  const item = yaml.dump([answers]);
  // for debug
  console.log(item);
  fs.appendFileSync(dataFile, item);
}

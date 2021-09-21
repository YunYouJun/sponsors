#!/usr/bin/env node
import { program } from "commander";
import pkg from "../package.json";

import inquirer from "inquirer";

import { onAdd } from "./add";
inquirer.registerPrompt("datetime", require("inquirer-datepicker-prompt"));

program.version(pkg.version);

program.command("add").action(onAdd);

export async function run() {
  program.parse(process.argv);
}

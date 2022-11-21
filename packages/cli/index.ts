#!/usr/bin/env node
import { program } from 'commander'
import inquirer from 'inquirer'
// https://github.com/haversnail/inquirer-date-prompt
import datePrompt from 'inquirer-date-prompt'
import pkg from './package.json'

import { onAdd } from './add'
inquirer.registerPrompt('date', datePrompt as any)

program.version(pkg.version)

program.command('add').action(onAdd)

export async function run() {
  program.parse(process.argv)
}

run()

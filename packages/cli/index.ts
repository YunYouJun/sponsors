#!/usr/bin/env node
import { program } from 'commander'
import inquirer from 'inquirer'
import inquirerDatepickerPrompt from 'inquirer-datepicker-prompt'
import pkg from './package.json'

import { onAdd } from './add'
inquirer.registerPrompt('datetime', inquirerDatepickerPrompt)

program.version(pkg.version)

program.command('add').action(onAdd)

export async function run() {
  program.parse(process.argv)
}

run()

#!/usr/bin/env node
import process from 'node:process'
import { program } from 'commander'

import { onAdd } from './add'

import pkg from './package.json'

program.version(pkg.version)

program.command('add').action(onAdd)

export async function run() {
  program.parse(process.argv)
}

run()

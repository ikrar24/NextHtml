#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const generateScript = path.resolve(__dirname, '../lib/nexthtml.js');

const argv = yargs(hideBin(process.argv))
  .option('read', {
    alias: 'r',
    type: 'string',
    description: 'Input HTML file',
    demandOption: true,
  })
  .option('make', {
    alias: 'm',
    type: 'string',
    description: 'Output HTML file',
    demandOption: true,
  })
  .option('watch', {
    alias: 'w',
    type: 'boolean',
    description: 'Watch for file changes',
  })
  .help().argv;

const args = [
  `--read ${argv.read}`,
  `--make ${argv.make}`,
  argv.watch ? '--watch' : '',
].filter(Boolean).join(' ');

try {
  execSync(`node ${generateScript} ${args}`, { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Error running nexthtml-js:', err.message);
  process.exit(1);
}
#! /usr/bin/env node
const yargs = require('yargs');
const yargsParser = require('yargs-parser');
const pkg = require('../package.json')

// Setup default command parsing
// https://github.com/yargs/yargs/issues/467#issuecomment-219366276
const defaultCommand = 'help';
const args = process.argv;
const parsed = yargsParser(args);
const useDefaultCommand = parsed._.length === 2;

if (useDefaultCommand && !parsed.help) {
  args.splice(2, 0, defaultCommand)
  yargs.parse(args); // apply default command to yargs
}

const commandBuilder = (yargs, name, path) => {
  path = path || name;

  return yargs
    .commandDir(`../cmds/${path}`)
    .usage(`Usage: $0 ${name} <subcommand> [--parameters]`)
    .demand(1, 'Please specify a <subcommand>.')
    .strict()
    .help()
    .argv;
};

// set prefix for parameters via PETS_CONFIG_PARAMETER_NAME
yargs
  .env('PETS_CONFIG')
  .argv;

// update string templates
yargs
  .updateStrings({
    'Unknown argument: %s': {
      'one': 'Error: [%s] is not a valid argument',
      'other': 'Error: [%s] are not valid arguments'
    },
  })
  .argv;

// Command: <dogs>
yargs
  .command({
    command: 'dogs',
    description: 'Manage dogs',
    builder: (yargs) => commandBuilder(yargs, 'dogs')
  })
  .argv;

// Command: <cats>
yargs
  .command({
    command: 'cats',
    description: 'Manage cats',
    builder: (yargs) => commandBuilder(yargs, 'cats')
  })
  .argv;

// default usage and help
yargs
  .demand(1)
  .usage(
    'Usage: \n  $0 <command> <subcommand> [--parameters]' +
    '\n\nFor help with specific commands, use:' +
    '\n  $0 <command> --help'
  )
  .version(() => pkg.version)
  .alias('V', 'version')
  .help('h')
  .alias('h', 'help')
  .strict()
  .recommendCommands()
  .epilogue('Need additional help? Checkout the docs at https://github.com/eddywashere/pets')
  .argv;

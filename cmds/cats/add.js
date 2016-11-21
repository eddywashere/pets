const command = {
  command: 'add',
  description: 'Add cats by name',
  builder: (yargs) => {
    return yargs
      .usage('Usage: $0 cats add --names')
      .example('$0 cats add --name tyrion,nymeria')
      .options({
        names: {
          demand: true,
          describe: 'cat name(s) to add',
          type: 'array',
          coerce: (arg) => arg.toString().split(/[ ,]+/)
        }
      })
      .strict()
      .help()
      .argv
  },
  handler: (argv) => {
    console.log(`Adding the following cats:  ${argv.names.join(', ')}`);
  }
};

module.exports = command;

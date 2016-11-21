const command = {
  command: 'remove',
  description: 'Remove cats by name',
  builder: (yargs) => {
    return yargs
      .usage('Usage: $0 cats remove --names')
      .example('$0 cats remove --name tyrion,nymeria')
      .options({
        names: {
          demand: true,
          describe: 'cat name(s) to remove',
          type: 'array',
          coerce: (arg) => arg.toString().split(/[ ,]+/)
        }
      })
      .strict()
      .help()
      .argv
  },
  handler: (argv) => {
    console.log(`Removing the following cats:  ${argv.names.join(', ')}`);
  }
};

module.exports = command;

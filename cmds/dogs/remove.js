const command = {
  command: 'remove',
  description: 'Remove dogs by name',
  builder: (yargs) => {
    return yargs
      .usage('Usage: $0 dogs remove --names')
      .example('$0 dogs remove --name tyrion,nymeria')
      .options({
        names: {
          demand: true,
          describe: 'dog name(s) to remove',
          type: 'array',
          coerce: (arg) => arg.toString().split(/[ ,]+/)
        }
      })
      .strict()
      .help()
      .argv
  },
  handler: (argv) => {
    console.log(`Removing the following dogs:  ${argv.names.join(', ')}`);
  }
};

module.exports = command;

const command = {
  command: 'add',
  description: 'Add dogs by name',
  builder: (yargs) => {
    return yargs
      .usage('Usage: $0 dogs add --names')
      .example('$0 dogs add --name tyrion,nymeria')
      .options({
        names: {
          demand: true,
          describe: 'dog name(s) to add',
          type: 'array',
          coerce: (arg) => arg.toString().split(/[ ,]+/)
        }
      })
      .strict()
      .help()
      .argv
  },
  handler: (argv) => {
    console.log(`Adding the following dogs:  ${argv.names.join(', ')}`);
  }
};

module.exports = command;

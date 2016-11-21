# pets

An example cli built with [yargs](https://github.com/yargs/yargs).

### Install

`pets` requires Node V5 or higher. To install, run:

```
npm install -g pets
```

or clone the package locally and `npm link` it.

```
git clone git@github.com:eddywashere/pets.git
cd pets
npm install
npm link
```

### CLI Usage

```
pets <command> <subcommand> [--parameters]
```

Parameters can also be passed in via environment variables prefixed with `PETS_CONFIG`.

Example:

```
PETS_CONFIG_NAMES="nymeria,tyrion" pets cats add
# equivalent to:
# pets cats add --names nymeria,tyrion
```

### Code Organization

Commands are organized in subdirectories within the `cmd` directory. Each subcommand is read from the subdirectories via `.commandDir`. See [yargs commandDir docs](http://yargs.js.org/docs/#methods-commanddirdirectory-opts) for more info.

In a real world example, the `handler` for individual subcommands would contain real business logic to process the inputs.


### TODO

Tests

oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g bc-cli
$ bcli COMMAND
running command...
$ bcli (--version)
bc-cli/0.0.0 darwin-arm64 node-v18.13.0
$ bcli --help [COMMAND]
USAGE
  $ bcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`bcli hello PERSON`](#bcli-hello-person)
* [`bcli hello world`](#bcli-hello-world)
* [`bcli help [COMMANDS]`](#bcli-help-commands)
* [`bcli plugins`](#bcli-plugins)
* [`bcli plugins:install PLUGIN...`](#bcli-pluginsinstall-plugin)
* [`bcli plugins:inspect PLUGIN...`](#bcli-pluginsinspect-plugin)
* [`bcli plugins:install PLUGIN...`](#bcli-pluginsinstall-plugin-1)
* [`bcli plugins:link PLUGIN`](#bcli-pluginslink-plugin)
* [`bcli plugins:uninstall PLUGIN...`](#bcli-pluginsuninstall-plugin)
* [`bcli plugins:uninstall PLUGIN...`](#bcli-pluginsuninstall-plugin-1)
* [`bcli plugins:uninstall PLUGIN...`](#bcli-pluginsuninstall-plugin-2)
* [`bcli plugins update`](#bcli-plugins-update)

## `bcli hello PERSON`

Say hello

```
USAGE
  $ bcli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/ugoarzur/bc-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `bcli hello world`

Say hello world

```
USAGE
  $ bcli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ bcli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/ugoarzur/bc-cli/blob/v0.0.0/dist/commands/hello/world.ts)_

## `bcli help [COMMANDS]`

Display help for bcli.

```
USAGE
  $ bcli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for bcli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.18/src/commands/help.ts)_

## `bcli plugins`

List installed plugins.

```
USAGE
  $ bcli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ bcli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/index.ts)_

## `bcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bcli plugins add

EXAMPLES
  $ bcli plugins:install myplugin 

  $ bcli plugins:install https://github.com/someuser/someplugin

  $ bcli plugins:install someuser/someplugin
```

## `bcli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ bcli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ bcli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/inspect.ts)_

## `bcli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ bcli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ bcli plugins add

EXAMPLES
  $ bcli plugins:install myplugin 

  $ bcli plugins:install https://github.com/someuser/someplugin

  $ bcli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/install.ts)_

## `bcli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ bcli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ bcli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/link.ts)_

## `bcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bcli plugins unlink
  $ bcli plugins remove
```

## `bcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bcli plugins unlink
  $ bcli plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/uninstall.ts)_

## `bcli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ bcli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ bcli plugins unlink
  $ bcli plugins remove
```

## `bcli plugins update`

Update installed plugins.

```
USAGE
  $ bcli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.4.0/src/commands/plugins/update.ts)_
<!-- commandsstop -->

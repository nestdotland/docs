---
title: Introduction
sidebar_label: Introduction
slug: /cli/commands
---

## Usage

```shell script
nest [command]
```

### `[command]`

A command to run, help by default.

## Commands

### [help]

Show this help or the help of a sub-command

### [init]

Initiate a new module for the nest.land registry

### [setup]

Link current directory to an existing module

### [sync]

Synchronize remote and local configuration

### [publish](./publish.md)

Publish your module to the nest.land registry

### [upgrade]

Upgrade nest cli to the given version

### [login]

Add an existing user account

### [switch]

Change currently logged in user

### [logout]

Remove an existing user account

## Options

### `-h, --help`

Show help of a command

### `-V, --version`

Display version number

### `-L, --log-level <level>`

Set log level

:::note Default value
`"info"`
:::

### `-l, --log <path>`

Specify filepath to output logs

:::note Default value
`"nest-debug.log"`
:::

### `-G, --gui`

Perform the task in the gui

:::caution
Not implemented yet
:::

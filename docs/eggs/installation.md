---
title: Installation
---

To publish your first module to nest.land, you will need our CLI, **eggs**. You can install it using this command:

```shell script
deno install -Afq --unstable https://x.nest.land/eggs@0.3.4/eggs.ts
```

Please make sure to use the `-A` flag to grant all permissions to eggs, so you can enjoy all features seamlessly.

To ensure that you fully understand all the new features of the latest versions,
make sure to read the [releases](https://github.com/nestdotland/eggs/releases) page!

> Note: You need to upgrade to Deno v1.6.0 or newer in order to use our CLI.

## Permissions used

Check out the tasks we use the required permissions for.

**init**

- `write` - write to the egg config file
- `read` - read previous config

**install**

- `write` - write to the `.eggs-global-modules.json` config file
- `read` - read previous config
- `net` - get latest module version
- `run` - install module
- `env` - get home dir

**link**

- `write` - write to the `.nest-api-key` config file
- `env` - get home dir

**publish**

- `read` - read egg config file
- `net` - fetch module data & publish module

**update**

- `write` - write to the dependencies file
- `read` - read dependencies file
- `net` - get the latest module version
- `env` - get global config file for executables
- `run` - update executables

**upgrade**

- `net` - get the latest eggs version
- `run` - upgrade eggs

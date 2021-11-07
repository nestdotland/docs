---
title: Installation
---

To publish your first module to nest.land, you will need our CLI, `eggs`. You can install it using this command:

```shell script
deno install -Af --unstable https://x.nest.land/eggs@0.3.9/eggs.ts
```

Please make sure to use the `-A` flag to grant all permissions to eggs, so you can enjoy all features seamlessly.

To ensure that you fully understand all the new features of the latest versions,
make sure to read the [releases](https://github.com/nestdotland/eggs/releases) page!

:::note

Make sure you are using Deno `v1.12.0` or later.

:::

## Permissions used

Check out the tasks we use the required permissions for.

`eggs init`

- `--allow-write` - write to the egg config file
- `--allow-read` - read previous config

`eggs install`

- `--allow-write` - write to the `.eggs-global-modules.json` config file
- `--allow-read` - read previous config
- `--allow-net` - get latest module version
- `--allow-run` - install module
- `--allow-env` - get home dir

`eggs link`

- `--allow-write` - write to the `.nest-api-key` config file
- `--allow-env` - get home dir

`publish`

- `--allow-read` - read egg config file
- `--allow-net` - fetch module data & publish module

`update`

- `--allow-write` - write to the dependencies file
- `--allow-read` - read dependencies file
- `--allow-net` - get the latest module version
- `--allow-env` - get global config file for executables
- `--allow-run` - update executables

`upgrade`

- `--allow-net` - get the latest eggs version
- `--allow-run` - upgrade eggs

---
title: nest config pull
sidebar_label: pull
---

Fetch from and integrate with remote config. Your local changes will be merged with a diff algorithm. You will be warned if conflicts are found during the merge process.

```shell script
nest config pull
```

## Options

 | options       | description            |
 | ------------- | ---------------------- |
 | `-f, --force` | Overwrite local config |

:::caution
Use the `--force` option only if you need to reset your local config. Resolving merge conflicts is preferable in most cases. 
:::

## Examples

```shell script
nest config
nest config ---force
```

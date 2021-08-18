---
title: nest config push
sidebar_label: push
---

Update remote config. By default you can only push your configuration if it is newer than the remote configuration or if you have previously pulled the changes. 

```shell script
nest config push
```

## Options

 | options       | description             |
 | ------------- | ----------------------- |
 | `-f, --force` | Overwrite remote config |

:::caution
Use the `--force` option only if you need to reset remote config. Resolving merge conflicts is preferable in most cases. 
:::

## Examples

```shell script
nest config push
nest config push --force
```

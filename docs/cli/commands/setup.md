---
title: nest setup
sidebar_label: setup
---

Link current directory to an existing module.

```shell script
nest setup [author] [module]
```

## Arguments

 | argument | description     |
 | -------- | --------------- |
 | author   | A module author |
 | module   | A module name   |

:::info
If `[author]` or `[module]` is missing, you will be prompted to enter it.
:::

## Examples

```shell script
nest setup
nest setup me
nest setup me my-module
```

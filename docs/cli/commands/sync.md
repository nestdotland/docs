---
title: nest sync
sidebar_label: sync
---

Synchronize remote and local configuration. This command is an abstraction of the [pull](config/pull.md) and [push](config/push.md) commands.

```shell script
nest sync
```

:::info
Synchronization logic:
```js
if (local config older than remote config) {
  pull config & merge config;
  if (conflicts) {
    return;
  }
}
push config;
```
:::

## Examples

```shell script
nest sync
```

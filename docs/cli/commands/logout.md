---
title: nest logout
sidebar_label: logout
---

Remove an existing user account.

```shell script
nest logout [username]
```

See [users.json](../configuration/users.json.md) for technical details.

## Arguments

 | argument | description |
 | -------- | ----------- |
 | username | A username  |

:::info
If `[username]` is missing, you will be prompted to enter it.
:::

## Examples

```shell script
nest logout
nest logout me
```

---
title: Getting started
sidebar_label: Getting started
slug: /cli
---

:::caution Work in progress

Until the release of nest 1.0.0, the current CLI for nest is [eggs](../eggs/README.md).

In the future, [eggs](../eggs/README.md) will be a reference module manager that has first-class support for Nest including private modules. Other module managers can use this reference to integrate Nest into their software.

:::

The nest command line interface allows developers to easily create and publish modules on [nest.land](https://nest.land).

It's written in TypesScript, utilizing the power of Deno. It's lightweight yet efficient, and it provides an easy and safe way for developers to manage their modules.

### Install

```shell script
deno install -Afq https://nest.land/-/nest/nest.ts
```

### Publish

Log into your Nest account

```shell script
nest login <username> <auth_token>
```

:::note New to Nest.land?
[Create an account](https://nest.land/#).
:::

Initialize a nest module

```shell script
cd <module directory>
nest init <name> # follow the prompts
```

Publish to Nest

```shell script
nest publish <version>
```

You should now see your module on the [gallery](https://nest.land/gallery) !

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated. [Learn more](https://github.com/nestdotland/nest/blob/main/.github/CONTRIBUTING.md)


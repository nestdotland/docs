---
title: Publish command
sidebar_label: Publish
---

## Description

Publish your module to the nest.land registry

## Arguments

```shell script
nest publish [version]
```

### `[version]`

[Semver tag](https://semver.org/) or one of "major", "minor", "patch"

:::note Default value
`"patch"`

If no version is published yet, defaults to `"0.1.0"`
:::

## Options

### `-Y, --yes`

Disable confirmation prompts

### `-d, --dry-run`

No changes will actually be made, reports the details of what would have been published

### `-g, --git-tag`

Use the latest git tag as version (ignored if `[version]` is provided)

### `--pre [tag]`

Publish as a prerelease with optional identifier

### `--deno <semver>`

[Semver range](https://github.com/nestdotland/semver#ranges) for supported deno versions

### `-w, --wallet <path>`

Path to custom arweave wallet

### `--unlisted`

Publish as an unlisted version

## Examples

```shell script
# say the current version is module@1.0.0

nest publish                      # module@1.0.1
nest publish 1.2.3                # module@1.2.3
nest publish patch                # module@1.0.1
nest publish minor                # module@1.1.0
nest publish major                # module@2.0.0

nest publish --pre                # module@1.0.1-0
nest publish 1.2.3 --pre          # module@1.2.3-0
nest publish patch --pre          # module@1.0.1-0
nest publish minor --pre          # module@1.1.0-0
nest publish major --pre          # module@2.0.0-0

nest publish --pre alpha          # module@1.0.1-alpha.0
nest publish 1.2.3 --pre beta     # module@1.2.3-beta.0
nest publish patch --pre rc       # module@1.0.1-rc.0
nest publish minor --pre asdf     # module@1.1.0-asdf.0
nest publish major --pre pre      # module@1.0.1-pre.0

nest --deno ^1.7.1
nest --deno ">=1.2.3 <1.7.0"
```

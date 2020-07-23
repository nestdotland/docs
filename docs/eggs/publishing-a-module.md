# Publishing a module

To publish a module, just navigate to the root of your module (where your egg file is located) and use the command shown:
```shell script
eggs publish
```
**Boom!** After this, you'll be returned a link to your module on our [Gallery](https://nest.land/gallery). You should also update your `README.md` with this url so that other users can find your module on [nest.land](https://nest.land)!

> Note: Use the same command to publish a new version to an existing module!

## Options

You can use several options:
```shell script
eggs publish --bump minor
eggs publish --version 1.4.2
```

### --bump

Increment the version by the given release type.

 - patch - Bump the version up to the next patch version.
 - minor - Bump the version up to the next minor version.
 - major - Bump the version up to the next major version.
 - pre - Increment the prerelease version.
 - prepatch - Bump the version up to the next patch version and down to a prerelease.
 - preminor - Bump the version up to the next minor version and down to a prerelease.
 - premajor - Bump the version up to the next major version and down to a prerelease.
 - prerelease - Increment the prerelease version or increment the patch version from a non-prerelease version.

### --version

Update to the given version.

Version must follow [Semantic Versioning 2.0.0](https://semver.org/).


## Automatic publishing

Thanks to [@divy-work](https://github.com/divy-work), you can now set up a GitHub Actions workflow for automatically publishing your modules!
```yml
name: Publish Egg

on:
  release:
    types: [published]

jobs:
  publish-egg:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: denolib/setup-deno@master
        with:
          deno-version: 1.1.1
      - run: deno install -A -f --unstable -n eggs https://x.nest.land/eggs@0.2.0/mod.ts
      - run: |
          export PATH="/home/runner/.deno/bin:$PATH"
          eggs link ${{ secrets.NESTAPIKEY }}
          eggs publish
```
To see how to use this, visit our [eggs-ci repository](https://github.com/nestdotland/eggs-ci).

## Badge

In addition, you'll have the option of adding our official badge to your project docs, courtesy of [@maximousblk](https://github.com/maximousblk). This is the best way you can support our platform and help us grow. We'd really appreciate seeing it on your project!

**Round Edition**

![nest badge rounded](https://nest.land/badge.svg)

```
[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/your-module)
```
<hr>

**Block Edition**

![nest badge sharp](https://nest.land/badge-block.svg)

```
[![nest badge](https://nest.land/badge-block.svg)](https://nest.land/package/your-module)
```
<hr>

or if you want to support us *louder*, you can use the large badge:

![nest badge large](https://nest.land/badge-large.svg)

```
[![nest badge](https://nest.land/badge-large.svg)](https://nest.land/package/your-package)
```
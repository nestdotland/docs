---
title: Publishing a module
---

You can publish your module through our CLI or programmatically, in a typescript file.

To configure your module when publishing, you can use:

- an `egg.json` or `egg.yaml` file
- a `.eggignore` file
- the [options](#options) of the publish command.

If there is a conflict between a field in your config, the options of the publish command will take precedence, then the eggignore file and finally the eggs config file.

There are a number of required fields that must appear somewhere in your configuration:

- `name`;
- `version` and/or `bump`
- `files` and/or `ignore`

To publish a module, just navigate to the root of your module (where your egg file is located) and use the following command:

```sh
eggs publish
```

After this, you'll be returned a link to your module on the [Module Gallery](https://nest.land/gallery). You should also update your `README.md` with this url so that other users can find your module on Nest!

:::tip

Use the same command to publish a new version to an existing module!

:::

### Options

You can use several options as well, instead of stating these fields in your `egg` file:

```shell script
eggs publish --bump minor
eggs publish --version 1.4.2
eggs publish myModule --description "A deno module" --checkFormat
```

For more details, please refer to [configuration](configuration.md#field-information).

Additional options:

```
-Y, --yes         Disable confirmation prompts.
-d, --dry-run     No changes will actually be made, reports the details of what would have been published.
```

## Programmatically

You just need to import the `publish` function from the latest version of eggs.

```ts
import { publish } from 'https://x.nest.land/eggs@0.3.10/src/commands/publish.ts';

const config = {
  description: 'Your brief module description',
  version: '0.0.1',
  /* ... */
};

publish(config, 'my-module');
```

This functions identically to the CLI, and features such as logging are still available.

This avoids the need to install eggs. Moreover, every contributor to the project has the same version of eggs.

## Automatic publishing

You can set up a GitHub Actions workflow for automatically publishing your modules!

```yml
name: Publish

on:
  create:
    ref_type: 'tag'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - name: Setup repo
        uses: actions/checkout@v2

      - name: Setup Deno
        uses: maximousblk/setup-deno@v1
        with:
          deno-version: 1.13

      - name: Publish
        run: |
          deno install -Af --unstable https://x.nest.land/eggs@0.3.10/eggs.ts
          eggs link ${{ secrets.NESTAPIKEY }}
          eggs publish --yes --no-check --version $(git describe --tags $(git rev-list --tags --max-count=1))
```

To see how to use this, visit our [eggs-ci repository](https://github.com/nestdotland/eggs-ci).

## Badge

You can add our badge to your project docs. This is a great way to support our platform and help us grow. We'd really appreciate seeing it on your project!

![round](https://nest.land/badge.svg)

```
[![nest.land](https://nest.land/badge.svg)](https://nest.land/package/<your-module-name>)
```

![for-the-badge](https://nest.land/badge-block.svg)

```
[![nest.land](https://nest.land/badge-block.svg)](https://nest.land/package/<your-module-name>)
```

or if you want to support us even _louder_, you can use the large badge:

![large](https://nest.land/badge-large.svg)

```
[![nest.land](https://nest.land/badge-large.svg)](https://nest.land/package/<your-module-name>)
```

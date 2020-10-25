# Configuration

## Configuration file

It is not necessary to have a configuration file to publish to [Nest.land](nest.land).
However, you can choose to create one, and we offer you a tool to do so.
To do this, you need to type the following command in the root directory of your project:
```shell script
eggs init
```
By doing this, you'll be prompted with a setup screen, where you will be asked to enter your module details.

After you've initialized a project, you'll see a brand new `egg.json` or `egg.yml` file depending on the config format you've chosen. This file is specific to Nest.land.

Note: `egg.json` is different than Node's `package.json` for several reasons:

1. It only includes information necessary to the registry
2. An egg configuration file is not, and will ever be, required for a user to run their Deno project

Here is a template egg configuration file with all available fields:

__JSON__:
```json
{
    "name": "module-name",
    "entry": "./src/main.ts",
    "description": "Your brief module description",
    "homepage": "https://github.com/your_name/your_project",
    "unstable": true,
    "unlisted": false,
    "version": "0.0.1",
    "releaseType": "patch",
    "files": [
        "./mod.ts",
        "./src/**/*",
        "./README.md"
    ],
    "ignore": [
        ".git"
    ],
    "checkFormat": "deno fmt",
    "checkTests": "deno test",
    "checkInstallation": true,
    "check": false,
}
```

> Note: with a JSON file, you can validate your config by adding the following field:
> ```json
> "$schema": "https://x.nest.land/eggs@0.3.1/src/schema.json",
> ```

__YAML__:
```yaml
name: package-name
entry: ./src/main.ts
description: Your brief package description
homepage: https://github.com/your_name/your_project
unstable: true
unlisted: false
version: 0.0.1
releaseType: patch
files:
  - ./mod.ts
  - ./src/**/*
  - ./README.md
ignore:
  - .git
checkFormat: deno fmt
checkTests: deno test
checkInstallation: true
check: false
```

### Field information

- name:
    - The name of your module.
- entry:
    - The "index file" of your project. This is what users will see when they try to import your module from our registry!
    - Defaults to `./mod.ts`
- description:
    - A description of your module that will appear on the gallery.
- homepage:
    - A link to your homepage. (Note: Usually a repository.)
    - Defaults to `null`.
- unstable:
    - Is this version unstable?
    - Default value is determined by [Semantic Versioning](https://semver.org/) rules.
- unlisted:
    - Should people be able to find this module/version on the gallery? If `true`, module is hidden.
    - Defaults to `false`.
- version: 
    - Your module version.
    - Version must follow [Semantic Versioning 2.0.0](https://semver.org/).
- releaseType:
    - Increment the version by the release type.
        - patch - Bump the version up to the next patch version.
        - minor - Bump the version up to the next minor version.
        - major - Bump the version up to the next major version.
        - pre - Increment the prerelease version.
        - prepatch - Bump the version up to the next patch version and down to a prerelease.
        - preminor - Bump the version up to the next minor version and down to a prerelease.
        - premajor - Bump the version up to the next major version and down to a prerelease.
        - prerelease - Increment the prerelease version or increment the patch version from a non-prerelease version.
- files:
    - All the files that should be uploaded to nest.land. Supports file globbing.
    - Will throw an error if some files are not found.
> Do not use `./**/*` for the `files` field! This has been known to cause errors in the publishing process.
- ignore:
    - All the files that should be ignored when uploading to nest.land. Supports file globbing.
    - For more details, please refer to [#eggignore](#eggignore).
- checkFormat:
    - Automatically format your code before publishing to the blockchain.
    - Accepts a boolean or a string (user defined command).
    - Executes `deno fmt --check` if `true`.
- checkTest:
    - Run tests to ensure module is not broken.
    - Accepts a boolean or a string (user defined command).
    - Executes `deno test -A --unstable` if `true`.
- checkInstallation:
    - Simulates a dummy installation and check for missing files in the dependency tree.
    - Defaults to `false`.
- check:
    - Performs all checks.
    - Defaults to `true`.

## .eggignore

If you want a more fine grained control of the files you upload to nest.land you can create a 
`.eggignore` file in your module's root directory. 

Files and directories to be ignored are specified
one by line, as a [glob expression](https://it.wikipedia.org/wiki/Glob_pattern).
The `.eggignore` follows the same rules as the [.gitignore pattern format](https://git-scm.com/docs/gitignore#_pattern_format).

__.eggignore__:
```sh
# you can create comments using `#` at the beginning of the line

# files and directories are specified one by line, as a glob expr
.git*/**
.idea/**
.vscode/**
benchmarks/**
eggs-debug.log

# you can also esclude particular files, just like .gitignore
!benchmarks/README.md
```

### `extends` keyword

You can import other files with the `extends` keyword. The extended file must follow the same syntax.
For instance, to avoid duplicating the content of your `.gitignore` file, just add:

```diff
+ extends .gitignore
.idea/**
.vscode/**
benchmarks/**
eggs-debug.log
```

> Note: when extending the `.gitignore` file, `.git*/**` is automatically added to the list of ignored file.

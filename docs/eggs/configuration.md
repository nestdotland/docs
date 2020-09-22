# Configuration

After you've initialized a project, you'll see a brand new `egg.json` or `egg.yml` file depending on the config format you've chosen. This file is specific to nest.land.

Note: `egg.json` is different than Node's `package.json` for several reasons:

1. It only includes information necessary to the registry
2. An egg configuration file is not, and will ever be, required for a user to run their Deno project

Here is a template egg configuration file with all available fields:

__JSON__:
```json
{
    "name": "module-name",
    "description": "Your brief module description",
    "version": "0.0.1",
    "bump": "patch",
    "entry": "./src/main.ts",
    "unstable": true,
    "unlisted": false,
    "repository": "https://github.com/your_name/your_project",
    "files": [
        "./mod.ts",
        "./src/**/*",
        "./README.md"
    ],
    "ignore": [
        ".git"
    ],
    "checkFormat": true,
    "checkTests": true,
    "checkInstallation": true,
    "checkAll": false,
}
```

__YAML__:
```yaml
name: package-name
description: Your brief package description
version: 0.0.1
bump: patch
entry: ./src/main.ts
unstable: true
unlisted: false
repository: https://github.com/your_name/your_project
files:
  - ./mod.ts
  - ./src/**/*
  - ./README.md
ignore:
  - .git
checkFormat: true
checkTests: true
checkInstallation: true
checkAll: false
```

## Field information

- name:
    - The name of your module.
- description:
    - A description of your module that will appear on the gallery.
- version: 
    - Your module version.
    - Version must follow [Semantic Versioning 2.0.0](https://semver.org/).
- bump:
    - Increment the version by the release type.
        - patch - Bump the version up to the next patch version.
        - minor - Bump the version up to the next minor version.
        - major - Bump the version up to the next major version.
        - pre - Increment the prerelease version.
        - prepatch - Bump the version up to the next patch version and down to a prerelease.
        - preminor - Bump the version up to the next minor version and down to a prerelease.
        - premajor - Bump the version up to the next major version and down to a prerelease.
        - prerelease - Increment the prerelease version or increment the patch version from a non-prerelease version.
- entry:
    - The "index file" of your project. This is what users will see when they try to import your module from our registry!
    - Defaults to `./mod.ts`
- unstable:
    - Is this version unstable?
    - Default value is determined by Semantic Versioning rules.
- unlisted:
    - Should people be able to find this module/version on the gallery?
    - Defaults to false.
- repository:
    - A link to your repository.
    - Defaults to null.
- files:
    - All the files that should be uploaded to nest.land. Supports file globbing.
> Do not use `./**/*` for the `files` field! This has been known to cause errors in the publishing process.
- ignore:
    - All the files that should be ignored when uploading to nest.land. Supports file globbing.
    - For more details, please refer to [#eggignore](#eggignore).
- checkFormat:
    - Automatically format your code before publishing to the blockchain.
    - Defaults to false.
- checkTest:
    - Run `deno test`.
    - Defaults to false.
- checkInstallation:
    - Simulates a dummy installation and check for missing files in the dependency tree..
    - Defaults to false.
- checkAll:
    - Performs all checks..
    - Defaults to false.

# eggignore

If you want a more fine grained control of the files you upload to nest.land you can create a 
`.eggignore` file in your module's root directory. 

Files and directories to be ignored are specified
one by line, as a [glob expression](https://it.wikipedia.org/wiki/Glob_pattern).

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

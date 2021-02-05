---
title: module.json
sidebar_label: module.json
---

The metadata file of your module.

None of the properties described in this section are required to publish your module. However, it brings valuable information on your module that helps users to use it.

| field       | type       | description                                                                                                                                   |
| ----------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| main        | `string`   | A file path to the primary entry point to your program.                                                                                       |
| bin         | `string[]` | An array of file path to one or more executable files.                                                                                        |
| fullName    | `string`   | A longer name, without character restrictions or length limit.                                                                                |
| description | `string`   | This helps people discover your module by explaining its purpose.                                                                             |
| logo        | `string`   | A file path to your module logo. Will be displayed when module is featured.                                                                   |
| homepage    | `string`   | The url to the project homepage.                                                                                                              |
| repository  | `string`   | Specify the place where your code lives. This is helpful for people who want to contribute.                                                   |
| issues      | `string`   | The url to your project's issue tracker and / or the email address to which issues should be reported.                                        |
| license     | `string`   | You should specify a license for your module so that people know how they are permitted to use it, and any restrictions you're placing on it. |
| unlisted    | `boolean`  | The module will not be found on the website unless you have the exact link.                                                                   |
| private     | `boolean`  | Encrypts your module on the blockweave. You can fetch it and decrypt it through the eggs CLI. (not implemented yet)                           |
| keywords    | `string[]` | It helps people to find your module when searching for it.                                                                                    |
| hooks       | `Hooks`    | Hooks are scripts that nest executes before or after events such as: publish, and sync.                                                       |

## Hooks

To create "pre" or "post" hooks for any valid event in the `hooks` section of the module.json, simply create another key with a matching name and add "pre" or "post" to the beginning of them.

Valid events:
 - `publish`
 - `sync`

## Example

Here is an example of a complete configuration:

```json
{
    "main": "nest.ts",
    "bin": ["bin/cli.ts", "eggs.ts"],
    "fullName": "Nest CLI",
    "description": "Nest's official CLI to manage your modules",
    "logo": "assets/logo.png",
    "homepage": "https://nest.land",
    "repository": "https://github.com/nestdotland/nest",
    "issues": "https://github.com/nestdotland/nest/issues",
    "license": "MIT",
    "unlisted": false,
    "private": false,
    "keywords": ["cli", "registry", "nest" ],
    "hooks": {
        "prepublish": "deno fmt --check",
        "postpublish": "echo Success!",
        "presync": "sleep 3",
        "postsync": "cat .nest/module.json"
    }
}
```
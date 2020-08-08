# Configuration

After you've initialized a project, you'll see a brand new `egg.json` or `egg.yml` file depending on the config format you've chosen. This file is specific to nest.land and needed for the registry.

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
    "entry": "./src/main.ts",
    "stable": true,
    "unlisted": false,
    "fmt": true,
    "repository": "https://github.com/your_name/your_project",
    "files": [
        "./mod.ts",
        "./src/**/*",
        "./README.md"
    ]
}
```

__YAML__:
```yaml
name: package-name
description: Your brief package description
version: 0.0.1
entry: ./src/main.ts
stable: true
unlisted: false
fmt: true
repository: https://github.com/your_name/your_project
files:
  - ./mod.ts
  - ./src/**/*
  - ./README.md
```

## Field information

- name:
    - The name of your module.
    - Required: true
- description:
    - A description of your module that will appear on the gallery.
    - Required: true
- version: 
    - Your module version.
    - Required: false
        - If not specified, we automatically increment your module version by `0.0.1` on each publish.
- entry:
    - The "index file" of your project. This is what users will see when they try to import your module from our registry!
    - Required: false
        - Defaults to `./mod.ts`
- stable:
    - Is this version stable?
    - Required: false
        - Defaults to false
- unlisted:
    - Should people be able to find this module/version on the gallery?
    - Required: false
        - Defaults to false
- fmt:
    - Automatically format your code before publishing to the blockchain.
    - Required: false
         - Defaults to false    
- repository:
    - A link to your repository.
    - Required: false
        - Defaults to null
- files:
    - All the files that should be uploaded to nest.land. Supports file globbing.
    - Required: true
> Do not use `./**/*` for the `files` field! This has been known to cause errors in the publishing process.

# Installation

To initialize and publish your first module to nest.land, you will need our CLI, **eggs**. You can install it using this command:
```shell script
deno install -A -f --unstable -n eggs https://x.nest.land/eggs@0.2.0/mod.ts
```

Alternatively, to be informed of new releases you can install eggs with our global module manager:
```shell script
deno run -A --unstable https://x.nest.land/eggs@0.2.0/mod.ts install -A -f --unstable -n eggs https://x.nest.land/eggs@0.2.0/mod.ts
# or
eggs install -A -f --unstable -n eggs https://x.nest.land/eggs@0.2.0/mod.ts
```

Please make sure to use the `-A` flag to grant all permissions to eggs, so you can enjoy all features seamlessly.

> Note: You need to upgrade to Deno v1.1.0 or newer in order to use our CLI.

## Permissions used
Check out the tasks we use the required permissions for.
* init
  * __--allow-write__: write to the egg config file 
  * __--allow-read__: read previous config
* install
  * __--allow-write__: write to the `.eggs-global-modules.json` config file 
  * __--allow-read__: read previous config
  * __--allow-net__: get latest module version
  * __--allow-run__: install module
  * __--allow-env__: get home dir
* link
  * __--allow-write__: write to the `.nest-api-key` config file 
  * __--allow-env__: get home dir
* publish
  * __--allow-read__: read egg config file
  * __--allow-net__: fetch module data & publish module
* update
  * __--allow-write__: write to the dependencies file 
  * __--allow-read__: read dependencies file 
  * __--allow-net__: get the latest module version
  * __--allow-env__: get global config file for executables
  * __--allow-run__: update executables
* upgrade
  * __--allow-net__: get the latest eggs version
  * __--allow-run__: upgrade eggs
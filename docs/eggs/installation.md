# Installation

To publish your first module to nest.land, you will need our CLI, **eggs**. You can install it using this command:
```shell script
deno install -Afq --unstable https://x.nest.land/eggs@0.3.2/eggs.ts
```

Please make sure to use the `-A` flag to grant all permissions to eggs, so you can enjoy all features seamlessly.

To ensure that you fully understand all the new features of the latest versions,
make sure to read the (releases)[https://github.com/nestdotland/eggs/releases] page!

> Note: You need to upgrade to Deno v1.4.1 or newer in order to use our CLI.

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

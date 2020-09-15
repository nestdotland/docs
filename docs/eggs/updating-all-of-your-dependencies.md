# Updating all of your dependencies

You can easily update your dependencies and global scripts with the `update` command.
```shell script
eggs update [deps] <options>
```

Your dependencies are by default checked in the `deps.ts` file (current working directory). You can change this with `--file`
```shell script
eggs update # defaults to deps.ts
eggs update --file my_dependencies.ts 
```

By default, all your dependencies are updated. You can choose which ones will be modified by adding them as arguments.
```shell script
eggs update # Updates everything
eggs update http fs yolk # Updates only http, fs, yolk
```

Scripts installed with `eggs install` can also be updated with the `-g` parameter.
```shell script
eggs update -g # Updates every script installed with eggs install
eggs update eggs denon -g # Updates only eggs denon globally
```

Several registries are supported. We currently support:
 - x.nest.land
 - deno.land/x
 - deno.land/std
 - raw.githubusercontent.com
 - denopkg.com

> If you want us to add support for another registry, open an issue specifying the registry; we'll consider adding it!

An example of a dependency file:
```ts
import * as colors from "https://deno.land/std@v0.55.0/fmt/colors.ts"
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.0/mod.ts"
import * as eggs from "https://x.nest.land/eggs@v0.1.0/mod.ts"
import * as http from "https://deno.land/std/http/mod.ts"
```
After `eggs update`:
```ts
import * as colors from "https://deno.land/std@0.62.0/fmt/colors.ts"
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.2/mod.ts"
import * as eggs from "https://x.nest.land/eggs@0.2.2/mod.ts"
import * as http from "https://deno.land/std/http/mod.ts"
```

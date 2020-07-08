# Update

You can easily update your dependencies and global scripts with the `update` command.
```shell script
eggs update [deps] <options>
```

Your dependencies are by default checked in the `deps.ts` file (current working directory). You can change this with `--file`
```shell script
eggs update # default to deps.ts
eggs update --file dependencies.ts 
```

In regular mode, all your dependencies are updated. You can choose which ones will be modified by adding them as arguments.
```shell script
eggs update # Updates everything
eggs update http fs eggs # Updates only http, fs, eggs
```

Scripts installed with `eggs install` can also be updated with the `-g` parameter.
```shell script
eggs update -g # Updates every script installed with eggs install
eggs update eggs denon -g # Updates only eggs, denon
```

Several registries are supported. The current ones are:
 - x.nest.land
 - deno.land/x
 - deno.land/std
 - raw.githubusercontent.com
 - denopkg.com

If you want to add a registry, open an issue by specifying the registry url and we'll add it.

An example of updated file:
```ts
import * as colors from "https://deno.land/std@v0.55.0/fmt/colors.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.0/mod.ts"
import * as eggs from "https://x.nest.land/eggs@v0.1.0/mod.ts"
import * as http from "https://deno.land/std/http/mod.ts"
```
After `eggs update`:
```ts
import * as colors from "https://deno.land/std@0.58.0/fmt/colors.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.2.1/mod.ts"
import * as eggs from "https://x.nest.land/eggs@0.1.3/mod.ts"
import * as http from "https://deno.land/std/http/mod.ts"
```
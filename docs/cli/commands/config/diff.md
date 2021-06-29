---
title: nest config diff
sidebar_label: diff
---

Show changes in local config.

```shell script
nest config diff
```

## Options

 | options     | description                  |
 | ----------- | ---------------------------- |
 | `-r, --remote` | Compare with remote config |

:::info
Compares the changes with the data.json file by default.
:::

## Examples

```shell script
nest config diff
nest config diff --remote
```

```diff
   {
     fullName: "Nest CLI",
     description: "Nest's official CLI to manage your modules",  
     main: "nest.ts",
     bin: [
       "cli.ts",
+      "nest.js",
     ],
-    logo: "assets/logo.png",
+    logo: "assets/nest.png",
     homepage: "https://nest.land/x/author/module",
     repository: "https://github.com/nestdotland/nest",
     issues: "https://github.com/nestdotland/nest/issues",       
     license: "MIT",
-    unlisted: false,
     private: false,
     keywords: [ 
       "cli",
       "registry",
       "nest",
     ],
     hooks: {
       prepublish: "deno fmt --check",
-      postpublish: "echo Success!",
       presync: "sleep 3",
       postsync: "cat .nest/module.json",
     },
   },
```
```diff
   # List here the files and directories to be ignored, one by line as a glob expression.

-  # Dotfiles are ignored by default.
+  # Dotfiles are ignored by default
   .*

+  *_test.ts
+  .nest
+
```
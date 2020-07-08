# Installing a script as an executable

Just like *deno install*, you can install modules globally with eggs. By installing it this way, you will be notified if an update is available for your module. 

To install a module, simply replace *deno* with *eggs*.

```shell script
eggs install --allow-read --allow-run --allow-write --allow-net --unstable https://x.nest.land/denon@2.2.0/denon.ts
```

> Note: nest.land modules and executables are regularly checked for malicious code
---
title: Installing a script
---

Just like _deno install_, you can install modules globally with eggs. By installing it this way, you will be notified if an update is available for your module!

To install a module, simply replace _deno_ with _eggs_.

```shell script
eggs install --allow-read --allow-run --allow-write --allow-net --unstable https://x.nest.land/denon@2.2.0/denon.ts
```

<!-- TODO(@oganexon): update screenshot -->

![notification](https://user-images.githubusercontent.com/52361520/85203413-fb487d00-b30d-11ea-8139-42e93bb11165.png)

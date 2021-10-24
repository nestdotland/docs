---
title: Module
---

These endpoints provide module details.

# Get list of all modules

```
[GET] /modules?search={search}&limit={limit}&cursor={cursor}
```

- `search: string` search string for username
- `limit: number` limit number of users returned (max 100)
- `cursor: number` cursor to paginate results (default 0)

# Get one modules

```
[GET] /modules/:user/:module
```

- `user: string` username of module owner
- `module: string` name of module

# Get module versions

```
[GET] /modules/:user/:module/versions?search={search}&limit={limit}&cursor={cursor}
```

- `user: string` username of module owner
- `module: string` name of module
- `search: string` search string for version
- `limit: number` limit number of versions returned (max 100)
- `cursor: number` cursor to paginate results (default 0)

# Get one module version

```
[GET] /modules/:user/:module/:version?search={search}&limit={limit}&cursor={cursor}
```

- `user: string` username of module owner
- `module: string` name of module
- `version: string` version of module

# Get files in module version

```
[GET] /modules/:user/:module/:version/files?search={search}&limit={limit}&cursor={cursor}
```

- `user: string` username of module owner
- `module: string` name of module
- `version: string` version of module
- `search: string` search string for filepath
- `limit: number` limit number of files returned (max 100)
- `cursor: number` cursor to paginate results (default 0)

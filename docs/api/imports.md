---
title: Imports
---

The REST API provides endpoints for Deno's import intellesense.

# Scoped Modules

## Get list of all users

```
[GET] /imports/x
```

## Get list of all modules by a user

```
[GET] /imports/x/:user
```

- `user: string` username of the module author

## Get list of all versions of a module

```
[GET] /imports/x/:user/:module
```

- `user: string` username of the module author
- `module: string` name of the module

## Get list of all files in a version

```
[GET] /imports/x/:user/:module/:version
```

- `user: string` username of the module author
- `module: string` name of the module
- `version: string` version of the module

# Vanity Modules

## Get list of all vanity modules

```
[GET] /imports/-
```

## Get list of all versions of a vanity module

```
[GET] /imports/-/:module
```

- `module: string` name of the vanity module

## Get list of all files in a vanity module version

```
[GET] /imports/-/:module/:version
```

- `module: string` name of the vanity module
- `version: string` version of the vanity module

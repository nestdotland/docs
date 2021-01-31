---
title: Mutations
---

> This part of the documentation is not complete.
## Module

#### `createPackage`

> Publish a package

|param|description|
|---|---|
|name|name for the new package|

##### example query

```graphql
mutation {
  createPackage(newPackage: {name: "autopilot", normalizedName: "autopilot", owner: "divy", description: "Cross-platform desktop automation", repository: "https://github.com/divy-work/autopilot-deno", latestVersion: "v0.1.0", latestStableVersion: "v0.1.0", packageUploadNames: ["autopilot"], locked: false, malicious: false, unlisted: false, updatedAt: "sometime", createdAt: "sometime"}) {
    name
    owner
    normalizedName
    latestVersion
    latestStableVersion
    packageUploadNames
  }
}
```

__Result:__

```json
{
  "data": {
    "createPackage": {
      "name": "autopilot",
      "owner": "autopilot",
      "normalizedName": "autopilot",
      "latestVersion": "v0.1.0",
      "latestStableVersion": "v0.1.0",
      "packageUploadNames": [
        "autopilot"
      ]
    }
  }
}
```


## User

#### `createUser`

> Create a user with username and password

|param|description|
|---|---|
|username|username for the new user|
|password|password for the new user|

##### example query

```graphql
mutation {
  createUser(newUser: { name: "divy [Divy]", password: "hehe"}) {
    name
    normalizedName
    apiKey
    packageNames
    createdAt
  }
}
```

__Result:__

```json
{
  "data": {
    "createUser": {
      "name": "divy [Divy]",
      "normalizedName": "divy _divy_",
      "apiKey": "efc56537a8214c5b9d4320c551790cf3",
      "createdAt": "2020-06-27T10:15:55.670232Z",
      "packageNames": [
        "autopilot"
      ]
    }
  }
}
```

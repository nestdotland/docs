# Queries

## Module

#### `module`

> Query a particular package by its name

|param|description|
|---|---|
|name|name of the module|

##### example query

```graphql
{
  module(name: "eggs") {
    name,
    owner,
    normalizedName,
    latestVersion,
    latestStableVersion,
    uploads {
      name
    }
  }
}
```
__Result:__
```json
{
  "data": {
    "package": {
      "name": "eggs",
      "owner": "nest.land",
      "normalizedName": "eggs",
      "latestVersion": "v0.1.0",
      "latestStableVersion": "v0.1.0",
      "uploads": [
        { "name": "eggs" }
      ]
    }
  }
}
```


#### `modules`

> Query all packages in the registry

##### example query

```graphql
{
  modules {
    name,
    owner,
    normalizedName,
    latestVersion,
    latestStableVersion,
    uploads {
      name
    }
  }
}
```
__Result:__
```json
{
  "data": {
    "modules": [
      {
        "name": "eggs",
        "owner": "nest.land",
        "normalizedName": "eggs",
        "latestVersion": "v0.1.0",
        "latestStableVersion": "v0.1.0",
        "uploads": [
          { "name": "eggs@v0.0.0" },
          { "name": "eggs@v0.1.0" }
        ]
      },
      {
        "name": "autopilot",
        "owner": "divy",
        "normalizedName": "autopilot",
        "latestVersion": "v0.1.8",
        "latestStableVersion": "v0.1.8",
        "packageUploadNames": [
          { "name": "autopilot@v0.1.8" },
          { "name": "autopilot@v0.1.7" }
        ]
      }
    ]
  }
}
```


## User

#### `user`

> Query a particular package by their nest.land api key.

|param|description|
|---|---|
|apiKey|apiKey of the user|

##### example query

```graphql
{
  user(apiKey: "<API-KEY>") {
    name,
  	createdAt,
    modules {
      name
      uploads {
        name
      }
    }
  }
}
```

```json
{
  "data": {
    "user": {
      "name": "divy",
      "createdAt": "2020-06-27T10:15:55.670232Z".
      "modules": [
        {
          "name": "autopilot",
          "uploads": [
            { name: "autopilot@v0.1.2" },
            { name: "autopilot@v0.1.3" }
          ]
        }
      ]
    }
  }
}
```

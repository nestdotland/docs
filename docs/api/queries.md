# Queries

## Module

#### `package`

> Query a particular package by its name

|param|description|
|---|---|
|name|name of the module|

##### example query

```graphql
{
  package(name: "eggs") {
    name,
    owner,
    normalizedName,
    latestVersion,
    latestStableVersion,
    packageUploadNames
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
      "packageUploadNames": [
        "eggs"
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
    packageUploadNames
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
        "packageUploadNames": [
          "eggs@0.0.0",
          "eggs@0.1.0"
        ]
      },
      {
        "name": "autopilot",
        "owner": "divy",
        "normalizedName": "autopilot",
        "latestVersion": "v0.1.8",
        "latestStableVersion": "v0.1.8",
        "packageUploadNames": [
          "autopilot@0.1.8",
          "autopilot@0.1.7"
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
  user(apiKey: "efc56537a8214c5b9d4320c551790cf3") {
    name,
    normalizedName,
  	createdAt
  }
}
```

```json
{
  "data": {
    "user": {
      "name": "divy[Divy]",
      "normalizedName": "divy_divy_",
      "createdAt": "2020-06-27T10:15:55.670232Z"
    }
  }
}
```

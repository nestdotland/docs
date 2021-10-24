---
title: Users
---

These endpoints provide user details.

# Get list of all users

```
[GET] /users?search={search}&limit={limit}&cursor={cursor}
```

- `search: string` search string for username
- `limit: number` limit number of users returned (max 100)
- `cursor: number` cursor to paginate results (default 0)

# Get one user

```
[GET] /users/:user
```

# Get modules by a user

```
[GET] /users/:user/modules?search={search}&limit={limit}&cursor={cursor}
```

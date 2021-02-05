---
title: FAQ
sidebar_label: FAQ
---

### Why do I have a directory named `.nest` in my project?

The `.nest` directory is created when you link a directory to a Nest module.

### What does this directory contain?

The `module.json` file contains metadata about the module

The `ignore` file contains a list of files that are ignored or included

The `data.json` file is an auto generated file. This file should **NOT** be directly edited by the user.

### Should I commit the `.nest` directory?

**No**, you should not commit the `.nest` directory to your repository.
Upon creation, it will be automatically added to your `.gitignore` file.

### Why are Nest CLI and eggs separate?

Nest CLI is the main utility you would use to create and publish modules. Eggs on the other hand, is just a reference module manager that has first-class support for Nest including private modules. Other module managers can use this reference to integrate Nest into their software.

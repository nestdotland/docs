---
title: ignore
sidebar_label: ignore
---

An `ignore` file specifies intentionally files that nest should ignore. Each line in an `ignore` file specifies a pattern. 

The syntax of nest's `ignore` file is a superset of the [`.gitignore` pattern format](https://git-scm.com/docs/gitignore#_pattern_format).

## Pattern format

  -  A blank line matches no files, so it can serve as a separator for readability.

   - A line starting with # serves as a comment. Put a backslash ("`\`") in front of the first hash for patterns that begin with a hash.

  -  Trailing spaces are ignored unless they are quoted with backslash ("`\`").

  -  An optional prefix "`!`" which negates the pattern; any matching file excluded by a previous pattern will become included again. It is not possible to re-include a file if a parent directory of that file is excluded. Git doesn't list excluded directories for performance reasons, so any patterns on contained files have no effect, no matter where they are defined. Put a backslash ("`\`") in front of the first "`!`" for patterns that begin with a literal "`!`", for example, "`\!important!.txt`".

  -  The slash / is used as the directory separator. Separators may occur at the beginning, middle or end of the `ignore` search pattern.

 -   If there is a separator at the beginning or middle (or both) of the pattern, then the pattern is relative to the directory level of the particular `ignore` file itself. Otherwise the pattern may also match at any level below the `ignore` level.

 -   If there is a separator at the end of the pattern then the pattern will only match directories, otherwise the pattern can match both files and directories.

  -  For example, a pattern `doc/frotz/` matches `doc/frotz` directory, but not `a/doc/frotz` directory; however `frotz/` matches `frotz` and `a/frotz` that is a directory (all paths are relative from the `ignore` file).

  -  An asterisk "`*`" matches anything except a slash. The character "`?`" matches any one character except "`/`". The range notation, e.g. `[a-zA-Z]`, can be used to match one of the characters in a range.

Two consecutive asterisks ("`**`") in patterns matched against full pathname may have special meaning:

  -  A leading "`**`" followed by a slash means match in all directories. For example, "`**/foo`" matches file or directory "`foo`" anywhere, the same as pattern "`foo`". "`**/foo/bar`" matches file or directory "`bar`" anywhere that is directly under directory "`foo`".

  -  A trailing "`/**`" matches everything inside. For example, "`abc/**`" matches all files inside directory "`abc`", relative to the location of the `ignore` file, with infinite depth.

  -  A slash followed by two consecutive asterisks then a slash matches zero or more directories. For example, "`a/**/b`" matches "`a/b`", "`a/x/b`", "`a/x/y/b`" and so on.

  -  Other consecutive asterisks are considered regular asterisks and will match according to the previous rules.

## `@extends` keyword

You can import other files with the `@extends` keyword. The extended file must follow the same syntax.

:::tip
Use the `@extends` keyword to avoid duplicating the content of your `.gitignore` file.
:::

## Examples

```shell script
@extends .gitignore

# exclude everything except directory foo/bar
/*
!/foo
/foo/*
!/foo/bar
```
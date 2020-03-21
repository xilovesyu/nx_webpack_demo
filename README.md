### Monorepo

We can use lerna and yarn workspaces to manage a monorepo.

#### 1. yarn workspaces

1. First of all, make an dir and then use `yarn init` to enable a npm package.
2. You can add "workspaces": ["yourMonoRepoPath1"] to your packages.json to enable a monorepo. 
If you do so, you should also make "private": true to make the root package to be private.

If you has multi workspaces, you can also use "workspaces": ["folderName/*"] to enable all.

3. Init every monorepo.
s

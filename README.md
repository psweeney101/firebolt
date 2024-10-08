<div align="center">
  <h1>🔥 Firebolt ⚡️</h1>
  <img src="apps/ui/public/logo.png" height="75px" />
  <br />
  <strong>An example repo showing how to quickly get going with Nx in a DevContainer</strong>
  <br />
  <br />

<a href="https://angular.dev">![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)</a>
<a href="https://www.docker.com">![Docker](https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)</a>
<a href="https://eslint.org">![ESLint](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint)</a>
<a href="https://jestjs.io">![Jest](https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest)</a>
<a href="https://mysql.com">![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)</a>
<a href="https://nestjs.com">![NestJS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs)</a>
<a href="https://nodejs.org">![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)</a>
<a href="https://nx.dev">![Nx](https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx)</a>
<a href="https://prettier.io">![Prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)</a>
<a href="https://stylelint.io">![Stylelint](https://img.shields.io/badge/stylelint-000?style=for-the-badge&logo=stylelint&logoColor=white)</a>
<a href="https://www.typescriptlang.org">![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)</a>
<br />
<br />
<a href="https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/psweeney101/firebolt">![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)</a>

</div>

Demonstrating how to use Nx + DevContainers to get going

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

## Setup

1. Create a .env file
   ```
   MYSQL_ROOT_PASSWORD = "root-password"
   MYSQL_USER = "mysql"
   MYSQL_PASSWORD = "password"
   MYSQL_DATABASE = "firebolt"
   ```
2. `npm install`
3. `npm start`

## How I Got Here

### Bootstrap the Project

- `npx create-nx-workspace firebolt`
  - Which stack do you want to use? `none`
  - Package-based monorepo, integrated monorepo, or standalone project? `integrated`
  - Which CI provider would you like to use? `skip`
  - Would you like remote caching to make your build faster?? `skip`

### Add the API

- `nx add @nx/nest`
- `nx generate @nx/nest:app apps/api --e2eTestRunner none --setParserOptionsProject --strict`

### Add the UI

- `nx add @nx/angular`
- `nx generate @nx/angular:app apps/ui --backendProject api --e2eTestRunner none --setParserOptionsProject --strict`
  - Which stylesheet format would you like to use? `scss`
  - Which bundler do you want to use to build the application? `esbuild`
  - Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? `false`
- Change port in `apps/ui/proxy.conf.json` to `3000`

### Add the Shared Lib

- `nx add @nx/node`
- `nx generate @nx/node:lib libs/shared --setParserOptionsProject --strict`

### Minor Tweaks

- In `nx.json`, set `targetDefaults.serve.options.host` to `127.0.0.1`

### Lint

- `npm i -D sort-package-json eslint-config-airbnb-typescript eslint-plugin-import nx-stylelint stylelint-config-standard-scss stylelint-config-idiomatic-order sort-package-json`
- `nx generate nx-stylelint:configuration --project ui --scss`
- Edit `.eslintrc.json` and `stylelintrc.json`
- `nx run-many --targets lint,stylelint,format --fix`

### Add Husky

- `npm i -D husky`
- `npx husky init`
- Add `scripts` to `package.json`
- Edit `.husky/pre-commit`

### Add Patches

[Nx daemon does not work in docker](https://github.com/nrwl/nx/issues/14126)

- `npm i -D patch-package`
- Remove `isDocker()` in `node_modules/nx/src/daemon/client/client.js`
- `npx patch-package nx`
- Add `"postinstall": "patch-package"` to `scripts` in `package.json`

### Add Angular Material

- `npm install --save @angular/material`
- `npm install --save-dev material-icons`
- Edit `styles.scss`, `themes.scss`, and `targets.build.styles` in `project.json`

### Add TypeORM

- `npm install --save @nestjs/typeorm typeorm mysql2`
- Edit `app.module.ts`

## Contributing

## Create a UI Component

`nx generate @nx/angular:component apps/ui/src/app/path/to/component`

## Create a migration

`npm run typeorm -- migration:create apps/api/src/app/migrations/migration-name`

or

`npm run typeorm -- migration:[generate, run, show, revert] apps/api/src/app/migrations/migration-name --dataSource apps/api/src/app/typeorm.module.ts`

## Upgrade packages

1. `nx migrate latest --interactive`
2. `npm install` (or `npm upgrade`)
3. `nx migrate --run-migrations`

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Nx plugins and code generators

Add Nx plugins to leverage their code generators and automated, inferred tasks.

```
# Add plugin
npx nx add @nx/react

# Use code generator
npx nx generate @nx/react:app demo

# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```

Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available.

Learn more about [code generators](https://nx.dev/features/generate-code) and [inferred tasks](https://nx.dev/concepts/inferred-tasks) in the docs.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)

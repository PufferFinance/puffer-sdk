# Puffer SDK Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

> Note: This is a workspace package, so run all commands from the root of the repo.

### Installation

```sh
# Switch to repo root if needed.
cd ../
pnpm install
```

### Local Development

```sh
pnpm docs:start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
pnpm docs:build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

The deployment of the docs is automated with each release. See the [publish.yml](../.github/workflows/publish.yml) GitHub action.

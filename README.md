# Bun Unit Test Template

A minimal template for setting up a TypeScript project with unit tests using [Bun](https://bun.sh/).

Note: `bun test` only works on macOS and Linux.

## Commands

Run tests.

```bash
bun test
```

Run `src/index.ts`.

```bash
bun run start
```

## Setup Steps

Run the following command to initialize the Bun project.

```bash
bun init
```

Then everything else would have been setup out-of-the box. Including:

- Running TypeScript files with `bun run <filename>`.
- Writing TypeScript tests with the filename `*.test.ts` and using Jest-like API with the built-in `bun:test` module.
- Running TypeScript tests with the command `bun test`.

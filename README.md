This repository demonstrates a bug in Vite, which causes [library builds](https://vitejs.dev/guide/build.html#library-mode) with [inlined `.wasm` files](https://vitejs.dev/guide/features.html#webassembly) to fail on Node.js < v16.

## Prerequisites

You must have Node.js < 16 and NPM ≥ 7. I recommend switching Node.js versions using [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows).

There are two branches in this repository:

- [Vite 3.x](https://github.com/pastelmind/vite-wasm-node14-bug) (in alpha as of writing)
- [Vite 2.x](https://github.com/pastelmind/vite-wasm-node14-bug/tree/vite-2)

## How to reproduce (without building WebAssembly)

This repository contains a pre-built `.wasm` file, so that you can reproduce the bug without installing the Rust toolchain:

```
npm install --omit=optional
npm run build
npm start
```

## How to reproduce

If you have [installed the Rust toolchain](https://rustup.rs) on your system, you can reproduce the bug by building the WebAssembly module yourself:

```
npm install
npm run build-wasm
npm run build
npm start
```

## Expected result

```console
$ npm start

123 + 456 = 579
```

## Actual result

```console
$ npm start

ReferenceError: atob is not defined
    at initWasm (file:///~/vite-wasm-node14-bug/dist/index.js:4:26)
    at wasmInit (file:///~/vite-wasm-node14-bug/dist/index.js:22:28)
    at file:///~/vite-wasm-node14-bug/dist/index.js:27:24
    at file:///~/vite-wasm-node14-bug/dist/index.js:34:3
    ...
```

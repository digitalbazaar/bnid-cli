# JavaScript Base-N Id Generator Command Line Interface _(bnid-cli)_

[![Node.js CI](https://github.com/digitalbazaar/bnid-cli/workflows/Node.js%20CI/badge.svg)](https://github.com/digitalbazaar/bnid-cli/actions?query=workflow%3A%22Node.js+CI%22)

> A command line interface for the `bnid` library to generate random ids and
> encode and decode them using various base-N encodings.

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [Commercial Support](#commercial-support)
- [License](#license)

## Background

This package provides and command line interface tool to generate random ids
and encode and decode them in various base-N encodings. The main functionality
is provided by the [`bnid`](https://github.com/digitalbazaar/bnid) package.

## Install

### NPM

```
npm install bnid-cli
```

### Git

To install locally (for development):

```
git clone https://github.com/digitalbazaar/bnid-cli.git
cd bnid-cli
npm install
```

## Usage

A command line interface tool called `bnid` is provided to generate and encode
ids. Please see [`bnid`](https://github.com/digitalbazaar/bnid) for a deeper
insight into the meaning of the options.

`bnid` can be run installed, run directly, or run via `npx`:

```
npm install -g bnid-cli
bnid [OPTIONS]
```
```
./bnid [OPTIONS]
```
```
npx bnid-cli [OPTIONS]
```

The options follow the API. See help for more information:

```
npx bnid-cli --help
```

Examples:

```
npx bnid-cli
> zL8ajDGq3G44VpTnB7UVMq2
npx bnid-cli -e base16 --no-multibase -n 64
> da3cc9f90f9f8427
npx bnid-cli -e base16 --no-multibase -n 64 -b 128
> 000000000000000063bb5478d65f80ab
npx bnid-cli -n 32
z6uGJaE
npx bnid-cli -n 32
zipFBr
# Note: -f used to ensure fixed length
npx bnid-cli -n 32 -f
z17vsf8
npx bnid-cli -n 32 -b 64
z111113TqAT2
```

## Contribute

Please follow the existing code style.

PRs accepted.

If editing the README, please conform to the
[standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## Commercial Support

Commercial support for this library is available upon request from
Digital Bazaar: support@digitalbazaar.com

## License

[BSD-3-Clause](LICENSE.md) © Digital Bazaar

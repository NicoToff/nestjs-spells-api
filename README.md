# NestJS Spell API

<div style="text-align: center;" align="center">
  <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</div>

This simple API serves homebrewed spells for my campaigns of Dungeons & Dragons 5th Edition. It is built with [NestJS](https://nestjs.com/), a framework for building efficient, scalable Node.js server-side applications.

This application is yours to use, modify and distribute as you see fit. 

## Installation

First, clone this project (HTTPS):

```bash
git clone https://github.com/NicoToff/nestjs-spells-api.git
```
Or (SSH):
```bash
git clone git@github.com:NicoToff/nestjs-spells-api.git
```
## Run the app

### Development mode

> This project use [pnpm](https://pnpm.io/) as package manager. If you need to install it on your system, follow their [installation guide](https://pnpm.io/installation).

Install the dependencies:

```bash
pnpm install
pnpm dev
```

You are going to need some API keys to use POST routes and populate your database. The API keys must be in UUID format and are expected to be stored in ENV variables under "API_KEYS" (comma-separated).

A dev-script convieniently creates a `.env` file for you with random API keys:

```bash
pnpm keygen
```

In local environment, these keys are automatically pulled from the `.env` file directly.

### Docker

The project contains a working Dockerfile. Provided [you have Docker installed](https://docs.docker.com/get-docker/), you can build and run the image with this convenience script:

```bash
  pnpm docker:build
```

The script rebuilds the image, destroys the previous container and spawns a new one.

To just start the existing container, run:

```bash
  docker start nestjs-slim
```

<details>

<summary>Docker manually</summary>

If you want to do it manually, you can build and run the image with:

```bash
docker-compose up -d --build
```

</details>

### Fly.io

[My personal instance of this API](https://nestjs-spells-api.fly.dev/) is hosted on [Fly.io](https://fly.io/). If you wish to also deploy this app through them, you'll find a `fly.toml` file in the repo that you can tailor to your needs. You can deploy your own instance with the following command:

```bash
pnpm depl
```

This command will automically set secrets to your Fly.io instance.

Whichever hosting provider you choose, you'll need to provide API keys as ENV variables. 
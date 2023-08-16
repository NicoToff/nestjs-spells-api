# NestJS Spell API

<div style="text-align: center;">
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
pnpm start:dev
```

### Docker

The project contains a working Dockerfile. You can build the image with:

```bash
docker build -t nestjs-spells-api-image .
```

And run it with:

```bash
docker run --name nestjs-spells-api -p 8000:8000 nestjs-spells-api-image
```

### Fly.io

My personal instance of this API is hosted on [Fly.io](https://fly.io/). If you wish to also deploy this app through them, you'll find a `fly.toml` file in the repo that you can tailor to your needs. You can deploy your own instance with the following command:

```bash
flyctl deploy
```

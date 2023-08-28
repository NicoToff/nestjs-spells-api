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
pnpm keys:gen --create-env
```

Then, in local dev environment, these keys are automatically pulled from the `.env` file directly.

### Docker

The project contains a working Dockerfile. Provided [you have Docker installed](https://docs.docker.com/get-docker/), as well as [docker-compose](https://docs.docker.com/compose/install/), you can build and run the image with the following command:

```bash
docker-compose up -d --build
```

`docker-compose` is needed to set up ENV variables for the container. 

### Fly.io

[My personal instance of this API](https://nestjs-spells-api.fly.dev/) is hosted on [Fly.io](https://fly.io/). If you wish to also deploy this app through them, you'll find a `fly.toml` file in the repo that you can tailor to your needs. You can deploy your own instance with the following command:

```bash
pnpm depl
```

This command will automically set secrets to your Fly.io instance.

If you only wish to create and push new API keys, run:

```bash
pnpm keys:gen && pnpm keys:sync
```

Whichever hosting provider you choose, you'll need to provide API keys as ENV variables.

#### Fly.io FAQ

You might run into this error: 
```
Error: failed to update VM <id>: You have reached the maximum number of machines for this app.
```

Fly.io has a free tier that allows you to run 3 VMs at a time, but they also automatically provide redundancy when deploying your app. This means you end up with 2 machines for a single deployment, plus the auto-created "Free builder" => Max limit is indeed reached.

You can either upgrade your plan, or simply limit the number of VMs to 1 for all your apps by running:

```bash
fly scale count 1
```

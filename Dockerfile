# Docs taken from https://pnpm.io/docker

FROM node:18-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /app
WORKDIR /app

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build

FROM base
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY --from=build /app/dist /app/dist
EXPOSE 8000
CMD [ "pnpm", "start:prod" ]

# # Base image
# FROM node:18.17.1

# # Create app directory
# WORKDIR /usr/src/app

# # Copying package.json and lock file
# COPY package.json ./
# COPY pnpm-lock.yaml ./

# # Install app dependencies
# RUN pnpm install

# # Bundle app source
# COPY . .

# # Creates a "dist" folder with the production build
# RUN pnpm build

# # Start the server using the production build
# CMD [ "node", "dist/main.js" ]

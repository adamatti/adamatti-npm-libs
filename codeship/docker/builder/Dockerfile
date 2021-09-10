FROM node:12-alpine

WORKDIR /app

# Enable access to private npm registry

ARG NPM_REGISTRY_URL
ARG NPM_AUTH_TOKEN
RUN echo "//${NPM_REGISTRY_URL}/:_authToken=${NPM_AUTH_TOKEN}" > "${HOME}/.npmrc"
RUN yarn global add lerna@3.14.1

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
RUN lerna bootstrap


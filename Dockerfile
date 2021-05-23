FROM node:16.2.0

WORKDIR /app

COPY ["package*.json", "yarn.lock", "/app/"]
RUN yarn install --pure-lockfile

COPY . .

ARG ENV_JS
RUN echo ${ENV_JS} > /app/public/env.js

RUN yarn build

ENTRYPOINT ["yarn", "start"]

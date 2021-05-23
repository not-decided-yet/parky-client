FROM node:16.2.0

WORKDIR /app

COPY ["package*.json", "yarn.lock", "/app/"]
RUN yarn install --pure-lockfile

ARG ENV_LOCAL
RUN echo ${ENV_LOCAL} > .env.local

RUN yarn build

ENTRYPOINT yarn serve

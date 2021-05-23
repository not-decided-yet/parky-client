FROM node:16.2.0

WORKDIR /app

COPY ["package*.json", "yarn.lock", "/app/"]
RUN yarn install --pure-lockfile

COPY . .

ENTRYPOINT ["sh", "-c", "yarn build && yarn start"]

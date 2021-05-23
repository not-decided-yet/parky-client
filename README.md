# parky-client

## Setup

### Firebase Messaging Configuration

`.env.local` & `public/env.js`

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Deployment

### Using Docker

```sh
$ docker build -t parky-client --build-arg ENV_JS="$(cat public/env.js)" .
Sending build context to Docker daemon  11.71MB
Step 1/8 : FROM node:16.2.0
...

$ docker run -d -p 80:3000 -v `pwd`/.env.local:/app/.env.local -v `pwd`/public/env.js:/app/public/env.js parky-client
```

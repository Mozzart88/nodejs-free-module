FROM node:18-alpine3.17
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
COPY tests tests
COPY src src
RUN npm install -save-dev

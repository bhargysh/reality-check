FROM node:17-alpine

WORKDIR /app

EXPOSE 4000

RUN npm install npm@latest -g

COPY package*.json* ./

RUN npm install --no-optional && npm cache clean --force

RUN apk update && apk add bash

RUN apk update && apk add git

RUN git clone https://github.com/vishnubob/wait-for-it.git

COPY . .

CMD [ "npm", "run", "start"]

FROM node:17-alpine

WORKDIR /app

EXPOSE 3000

RUN npm install npm@latest -g

COPY package*.json* ./

RUN npm install --no-optional && npm cache clean --force

COPY . .

CMD [ "npm", "run", "start"]

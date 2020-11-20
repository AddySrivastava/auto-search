FROM node:10 as server-build

WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 5000

RUN npm install

CMD [ "npm", "start"]
FROM node:10 AS ui-build
WORKDIR /usr/src/app
COPY package*.json ./
EXPOSE 3000
RUN yarn install
CMD ["yarn", "start"] 


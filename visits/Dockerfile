FROM node:alpine

WORKDIR /usr/visits

COPY ./package.json ./
RUN npm config set strict-ssl false && npm install
COPY ./index.js ./

CMD ["npm", "start"]

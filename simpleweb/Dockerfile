FROM node:alpine

WORKDIR /usr/simpleweb

COPY ./src/package.json ./
RUN npm config set strict-ssl false && npm install
COPY ./src/ ./

CMD ["npm", "start"]

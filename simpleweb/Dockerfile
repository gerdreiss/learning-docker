FROM node:alpine
WORKDIR /usr/simpleweb
COPY ./src/ ./
RUN npm config set strict-ssl false \
 && npm install
CMD ["npm", "start"]

FROM node:alpine

WORKDIR /usr/visits

COPY ./package.json ./
RUN npm config set strict-ssl false \
# && npm config set proxy http://proxy.olymp:3128 \
# && npm config set https-proxy http://proxy.olymp:3128 \
 && npm install
COPY ./index.js ./

CMD ["npm", "start"]

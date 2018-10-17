FROM node:alpine
WORKDIR /usr/simpleweb
COPY ./src/ ./
RUN export http_proxy=http://proxy.olymp:3128 \
 && export https_proxy=http://proxy.olymp:3128 \
 && npm config set strict-ssl false \
 && npm install
CMD ["npm", "start"]
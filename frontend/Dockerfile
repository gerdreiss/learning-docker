FROM node:alpine AS builder
WORKDIR '/app'
COPY package.json .
RUN npm config set strict-ssl false \
# && npm config set proxy http://proxy.olymp:3128 \
# && npm config set https-proxy http://proxy.olymp:3128 \
 && npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
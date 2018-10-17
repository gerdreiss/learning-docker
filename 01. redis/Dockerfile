# Use an existing docker image as a base
FROM alpine

# Download and install a dependency
RUN export http_proxy=http://proxy.olymp:3128 \
 && export https_proxy=http://proxy.olymp:3128 \
 && apk update && apk upgrade \
 && apk add --no-cache bash \
 && apk add --update redis \
 && apk add --update gcc

# Tell the image what to do when it starts as a container
CMD ["redis-server"]

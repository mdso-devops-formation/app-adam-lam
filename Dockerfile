FROM node:16-alpine3.6 AS build
COPY ./package.json /front
WORKDIR /front
RUN npm install
COPY . /front
RUN npm run build

FROM nginx:alpine3.6
COPY --from=build build/. /etc/www/
COPY ./config.conf ./etc/nginx/d.conf/

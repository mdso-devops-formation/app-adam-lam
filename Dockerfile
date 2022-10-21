FROM node:16-alpine AS build
RUN mkdir app
COPY ./package.json /app
WORKDIR /app
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:latest
COPY --from=build /app/build/. /etc/www/
COPY ./config.conf ./var/nginx/d.conf/

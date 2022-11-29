FROM node:18-alpine as build-stage

WORKDIR /app
COPY . /app/

RUN npm install
RUN npm run build

FROM nginx:latest

COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY ./docker/nginx/nginx.conf /etc/nginx/nginx.conf
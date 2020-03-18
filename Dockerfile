FROM node:13.6.0-alpine3.11 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# put npm proxy here if necessary, example:
# RUN npm config set http-proxy http://192.168.1.1:8080
# RUN npm config set https-proxy http://192.168.1.1:8080

COPY . .
RUN npm run build:prod

FROM nginx:1.13.12-alpine
COPY --from=build /usr/src/app/dist/ngx-starter-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

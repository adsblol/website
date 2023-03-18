FROM node:lts as build
WORKDIR /src
ADD . .
RUN npm install
RUN npm run build

FROM  nginx:alpine
COPY  --from=build /src/public /usr/share/nginx/html

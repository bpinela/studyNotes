FROM node:alpine

ARG deploy_env='dev'
ENV DEPLOY_ENV ${deploy_env}
ARG port='8080'
ENV PORT ${port}
WORKDIR /app

RUN apk update && apk add htop tcpdump curl

COPY . .
RUN rm -rf node_modules
RUN npm install

EXPOSE ${port}
CMD npm run start:$DEPLOY_ENV

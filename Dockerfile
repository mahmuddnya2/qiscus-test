FROM node:lts-alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install
RUN npm install -g serve
COPY  . .
ENV PORT 3000
EXPOSE ${PORT}
CMD [ "serve","-s", "dist" ]
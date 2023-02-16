FROM node:18.14-alpine3.17
LABEL Author=MateoQuintero Version=0.1.0

RUN npm i -g ts-node typescript

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . .

RUN yarn
RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start"]

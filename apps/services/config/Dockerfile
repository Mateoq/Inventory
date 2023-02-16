FROM node:18.14-alpine3.17
LABEL Author=MateoQuintero Version=0.0.2

RUN npm i -g ts-node typescript

RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY . .

RUN yarn
# RUN scripts/build.sh --dev
RUN yarn build

EXPOSE 3001

CMD ["yarn", "run", "start:prod"]

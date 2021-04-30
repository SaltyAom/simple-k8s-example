FROM node:14-alpine
ENV NODE_ENV=production

WORKDIR /app/hello

COPY ["package.json", "yarn.lock"]

RUN yarn

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
FROM node:alpine

WORKDIR /portfolio

COPY package.json .

RUN npm install

COPY . /portfolio

RUN npm run build

EXPOSE 5550

CMD [ "npm", "run", "preview", "--https"]

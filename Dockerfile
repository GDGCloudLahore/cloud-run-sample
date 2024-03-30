FROM node:18-slim

WORKDIR /root
COPY package*.json ./
RUN npm install

COPY . .
RUN npx webpack
EXPOSE 8080

CMD [ "node", "./dist/main.js" ]

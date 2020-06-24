FROM node:13-alpine as builder

WORKDIR /wise-old-man/bot-website
COPY package*.json ./
RUN npm install -s
COPY . .
RUN npm run build

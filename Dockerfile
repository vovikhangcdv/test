FROM node:latest

ARG secret
ARG repo

ENV SECRET=$secret
ENV REPO=$repo

# Create app directory
WORKDIR /usr/src/app

# Set env as production
ENV NODE_ENV=production

# Install app dependencies
COPY package*.json ./

# Bundle app source
COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
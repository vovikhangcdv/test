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

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]
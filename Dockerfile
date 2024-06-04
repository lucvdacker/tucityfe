# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /src/app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install -g @angular/cli && npm install --force


# add app
COPY . ./

EXPOSE 4200

# start app
CMD ["npm", "run", "start"]

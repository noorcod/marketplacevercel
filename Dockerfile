# Dockerfile

# base image
FROM node:alpine

# create & set working directory

# copy source files
COPY . .

# install dependencies
RUN npm install

# start app
#RUN npm run dev
EXPOSE 3000

# Build Step
CMD npm run build:UAT

# Run
CMD npm run start:UAT
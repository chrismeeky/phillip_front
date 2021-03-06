# a custom Docker Image with this Dockerfile
FROM node:12-alpine3.12

# A directory within the virtualized Docker environment
# Becomes more relevant when using Docker Compose later
# WORKDIR /usr/src/app
ENV PROJECT_ID trusty-dialect-284219
ENV REACT_APP_baseUrl https://user-service-back.herokuapp.com/api/v1
ENV PORT 3000
ENV CI=true
# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm ci
# Copies everything over to Docker environment
COPY . .

# Uses port which is used by the actual application
EXPOSE 3000

# Finally runs the application
CMD [ "npm", "start" ]

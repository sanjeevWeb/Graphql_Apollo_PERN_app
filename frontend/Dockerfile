# Use an official Node.js runtime as a parent image
FROM node:latest as builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the current working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 7000

# Command to run the application(in development)
# CMD ["npm", "run", "dev" "--", "--host"]
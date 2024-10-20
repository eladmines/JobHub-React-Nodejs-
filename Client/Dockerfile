# Stage 1: Build the React application
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the application
CMD ["npm","run","start"]


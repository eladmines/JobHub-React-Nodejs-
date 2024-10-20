# Use the latest official Node.js Alpine image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install necessary build tools for native module compilation
RUN apk add --no-cache python3 make g++

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies using npm ci for a clean and reproducible install
RUN npm install

# Rebuild bcrypt for the correct environment
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of your application code
COPY . .

# Start the app in development mode
CMD ["npm", "run", "dev"]

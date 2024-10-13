# Use the latest official Node.js Alpine image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Install necessary build tools and Python for native module compilation
RUN apk add --no-cache python3 make g++ 

# Create a symlink for Python (required by node-gyp)
RUN ln -sf /usr/bin/python3 /usr/bin/python

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package*.json ./

# Install dependencies using npm ci for a clean and reproducible install
RUN npm ci

# Rebuild bcrypt for the correct environment
RUN npm rebuild bcrypt --build-from-source

# Copy the rest of your application code
COPY . .

# Expose the necessary port (adjust if your app uses a different port)
EXPOSE 3000

# Start the app in development mode
CMD ["npm", "run", "dev"]

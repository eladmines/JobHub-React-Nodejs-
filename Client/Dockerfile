# Stage 1: Build the React application
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package.json ./
 

# Install dependencies
RUN npm i

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx

# Expose port 80 for Nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# Copy the build artifacts from the previous stage
COPY --from=builder /app/build /usr/share/nginx/html

# Optionally, you can copy a custom Nginx configuration file
# COPY nginx.conf /etc/nginx/conf.d/default.conf

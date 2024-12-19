# Base image with Node.js
FROM public.ecr.aws/bitnami/node:20 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Use a lightweight web server for serving the React app
FROM public.ecr.aws/nginx/nginx:alpine-slim

# Copy the build output to the Nginx web server's directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port on which Nginx runs
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]


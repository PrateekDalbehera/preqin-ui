# Use the official Node.js 18 slim image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the environment variable from the .env file
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

# # Build your application
# RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Run your application
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
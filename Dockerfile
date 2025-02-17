# Use the official Node.js image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port the app will run on
EXPOSE 5000

# Command to run the app
CMD ["node", "server.js"]

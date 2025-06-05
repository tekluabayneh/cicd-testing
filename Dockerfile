# ✅ Base image
FROM node:alpine

# ✅ Set working directory
WORKDIR /app

# ✅ Copy package files first for efficient layer caching
COPY package*.json ./

# ✅ Install dependencies
RUN npm install

# ✅ Copy the rest of the project
COPY . .

EXPOSE 3000

# ✅ Define the command to run the app
CMD ["node", "server.js"]

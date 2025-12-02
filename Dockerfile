# Step 1: Build Angular App
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Step 2: NGINX Serve Static Files
FROM nginx:alpine

# Copy Angular build output
COPY --from=build /app/dist/frontend-app /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

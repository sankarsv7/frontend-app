# Step 1: Build Angular App
FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with NGINX
FROM nginx:alpine

# Copy correct Angular output (Angular 17+)
COPY --from=build /app/dist/frontend-app/browser/ /usr/share/nginx/html

# Copy NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

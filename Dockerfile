FROM nginx:alpine

# Copy modified Brunet apps to nginx public directory
COPY out /usr/share/nginx/html

# Copy custom Brunet nginx routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000 3001 3002 3003 3009

CMD ["nginx", "-g", "daemon off;"]

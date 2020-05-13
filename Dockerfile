# stage 1

FROM node:latest as SAdminUI
WORKDIR /app
COPY . .
RUN npm install && npm run build --prod


# stage 2

FROM nginx:alpine
COPY --from=node /app/dist/SAdminUI /usr/share/nginx/html
EXPOSE 81
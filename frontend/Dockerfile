# Etapa 1: Construcción
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Etapa 2: Servidor de Producción
FROM nginx:stable-alpine

# Copiamos los archivos compilados desde la etapa anterior
COPY --from=build /app/dist/frontend /usr/share/nginx/html
# Copiamos la configuración personalizada de Nginx (de momento NO)
# COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

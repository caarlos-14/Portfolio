# Usamos Node como base
FROM node:20-alpine

WORKDIR /app

# 1. Instalamos dependencias
COPY package*.json ./
RUN npm install

# 2. Copiamos el resto del código y compilamos
COPY . .
RUN npm run build

# 3. Lanzamos la aplicación
EXPOSE 3001
# Next.js por defecto usa el 3000, así que le forzamos el 3001
CMD ["npm", "start", "--", "-p", "3001"]
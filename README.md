# Microservicios con NestJS

Pre requisitos:

- Node-js versión 20 o superior
- NestJS
- Docker

## Pasos para iniciar microservicios localmente

1. Clonar repositorio
2. Verificar que las variables de entorno del archivo `.env` sean las correctas (si no existe, crearlo tomando como plantilla el archivo `.env.template`) en cada repositorio/carpetas (`client-gateway`, `inventory-ms`, `notification-ms`)

### Ejecutar individualmente

1. Abrir un terminal e iniciar el servidor NATS ejecutando el comando:
   ```bash
   docker run -d --name nats-main -p 4222:4222 -p 8222:8222 nats
   ```
2. Abrir un terminal, ubicarse en la carpeta `notification-ms` y ejecutar los comandos:
   ```bash
   npm i
   npm run start:dev
   ```
3. Abrir un terminal, ubicarse en la carpeta `inventory-ms` y ejecutar los comandos:
   ```bash
   npm i
   npm run start:dev
   ```
4. Abrir un terminal, ubicarse en la carpeta `client-gateway` y ejecutar los comandos:
   ```bash
   npm i
   npm run start:dev
   ```

### Ejecutar en entorno local con docker compose

3. Ejecutar el comando en la raíz del repositorio (en donde se encuentra el archivo `docker-compose.yaml`)
   ```bash
   docker compose up --build
   ```

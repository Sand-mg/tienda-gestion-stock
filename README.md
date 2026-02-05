"# Sistema de Gestión de Stock Inteligente" 
"Aplicación Fullstack con Angular, Java (Spring Boot) y Docker." 
## Características Principales
- **Frontend Reactivo:** Desarrollado con **Angular 20**, implementando **Signals** para una gestión de estado eficiente y **Zoneless change detection**.
- **Backend Robusto:** API REST con **Java 17** y **Spring Boot 3**.
- **Persistencia:** Base de Datos **PostgreSQL 15**.
- **Infraestructura:** Orquestación completa con **Docker** y **Docker Compose**.
- **Proxy de Desarrollo:** Configuración de bypass para evitar problemas de CORS en local.

## Stack Tecnológico
- **Frontend:** Angular 20, Bootstrap 5, TypeScript.
- **Backend:** Spring Boot 3, Spring Data JPA, Hibernate.
- **DevOps:** Docker, Nginx (para producción).

## Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone [https://github.com/Sand-mg/tienda-gestion-stock.git](https://github.com/Sand-mg/tienda-gestion-stock.git)
cd tienda-gestion-stock
```
### 2. Levantar la infraestructura (DB y Backend)
```bash
docker-compose up -d
```
### 3. Arrancar el Frontend (el Docker está comentado para desarrollo)
```bash
cd frontend
npm install
npm start
```

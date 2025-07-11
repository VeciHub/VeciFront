# VeciHub - Plataforma de Gestión Vecinal

Una aplicación web para comunidades vecinales que permite a los usuarios interactuar a través de un foro, eventos, encuestas y más.

---

## 🛠️ Requisitos previos

- Node.js (v16 o superior)
- NPM
- MySQL Server (v8 o superior)

---

## 🧩 Configuración de la Base de Datos

Para que la aplicación funcione correctamente, debes crear una base de datos en tu instancia local o remota de MySQL con las siguientes características:

### 🔐 Credenciales requeridas

- **Host**: `localhost`
- **Puerto**: `3306`
- **Nombre de la base de datos**: `vecihubdb`
- **Usuario**: `vecihubadmin`
- **Contraseña**: `vecihubadmin123$`

### 🧱 Script de creación recomendado

```sql
CREATE DATABASE vecihubdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER 'vecihubadmin'@'localhost' IDENTIFIED BY 'vecihubadmin123$';
GRANT ALL PRIVILEGES ON vecihubdb.* TO 'vecihubadmin'@'localhost';
FLUSH PRIVILEGES;
```

> ⚠️ Asegúrate de tener el puerto 3306 disponible y permitir conexiones desde tu aplicación backend.

---

## 📦 Instalación

```bash
# Instalar dependencias
npm install
```

---

## 🚀 Ejecución

Para ejecutar la aplicación completa, necesitas iniciar tanto el servidor API como la aplicación frontend:

```bash
# Iniciar frontend con Vite
npm run dev
```

---

## 🌟 Características principales

- **Foro comunitario**: Discusiones organizadas por categorías
- **Eventos**: Calendario de eventos vecinales
- **Encuestas**: Votaciones sobre temas de interés comunitario
- **Perfiles de usuario**: Gestión de perfiles personales
- **Panel de administración**: Herramientas para gestionar la comunidad

---

## 🧪 Tecnologías utilizadas

- Vue.js 3.5.13 (Composition API)
- Pinia 3.0.2 para gestión de estado
- Vue Router 4.5.1 para enrutamiento
- PrimeVue 4.3.4 como biblioteca de componentes UI
- Axios 1.9.0 para peticiones HTTP
- Vue i18n 11.1.3 para internacionalización
- Vite 6.3.5 como empaquetador y servidor de desarrollo

---

## 🧱 Estructura del proyecto

El proyecto sigue una arquitectura hexagonal (ports and adapters) en cada módulo:

- **/domain**: Modelos y lógica de negocio
- **/application**: Casos de uso y servicios
- **/infrastructure**: Implementaciones concretas (repositorios, API)
- **/presentation**: Componentes y páginas de la UI

---

## 🎨 Paleta de Colores

### Colores Principales

- `#328E6E` → Branding principal
- `#FDFAF6` → Fondo de encabezado
- `#000000` → Texto principal
- `#67AE6E` → Botones
- `#589F61` → Hover / Activo
- `#90C67C` → Fondos secundarios
- `#FFFFFF` → Texto sobre fondos oscuros
- `#FAF1E6` → Fondo general
- `#D9D9D9` → Entradas de texto

### Colores de Estado

- `#E74C3C` → Error
- `#F5B041` → Advertencia
- `#28B463` → Éxito
- `#3498DB` → Información

---

## 🛠️ Comandos útiles

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

```

---

## 🧪 Servidor de pruebas local (JSON)

```bash
cd server
./start2.sh
```

---

## 🤝 Contribuir

1. Haz un fork del repositorio
2. Crea una rama (`git checkout -b feature/tu-feature`)
3. Commit (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push (`git push origin feature/tu-feature`)
5. Abre un Pull Request

---

## 📝 Licencia

[MIT](LICENSE)

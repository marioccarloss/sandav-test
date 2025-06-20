# 🎮 Pokémon Battler

¡Bienvenido a Pokémon Battler! Una aplicación web para crear tus propios equipos Pokémon, guardarlos y simular emocionantes combates para ver quién es el mejor.

Este proyecto fue desarrollado como una prueba técnica de Front-end, utilizando tecnologías modernas como React, Vite, Zustand y TanStack (Query y Router).

![Pokémon Battler Screenshot](https://i.imgur.com/uGMAv3w.png)

## ✨ Características Principales

-   **Gestión de Equipos:** Crea múltiples equipos de hasta 6 Pokémon.
-   **Selección de Pokémon:** Elige de entre los 151 Pokémon originales de Kanto.
-   **Editor de Equipos Avanzado:**
    -   Reordena tus Pokémon con **Drag & Drop**.
    -   Ordena automáticamente por **ataque** o de forma **aleatoria**.
    -   Los equipos no guardados se mantienen como **borradores**.
-   **Simulación de Combate:** Enfrenta a dos de tus equipos en una batalla por rondas y descubre al ganador.
-   **Resultados Detallados:** Visualiza un resumen del combate y un log detallado de cada ronda.
-   **Tema Claro/Oscuro:** Interfaz con modo claro y oscuro que se adapta a las preferencias de tu sistema.
-   **Diseño Responsive:** Adaptado para una correcta visualización en diferentes dispositivos.

## 🛠️ Tecnologías Utilizadas

-   **Framework:** React 18
-   **Build Tool:** Vite
-   **Enrutamiento:** TanStack Router
-   **Gestión de Estado (Cliente):** TanStack Query (para datos de API)
-   **Gestión de Estado (Global):** Zustand (para estado de la UI)
-   **Estilos:** Styled Components
-   **Drag & Drop:** Dnd-kit
-   **Testing:** Jest + React Testing Library

## 🚀 Instalación y Ejecución

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

### Prerrequisitos

-   Node.js (versión 18.x o superior)
-   npm (o un gestor de paquetes compatible como yarn o pnpm)

### Pasos

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd pokemon-battler
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

4.  **Ejecuta los tests:**
    Para correr los tests unitarios, utiliza el siguiente comando:
    ```bash
    npm run test
    ```

## 📁 Estructura del Proyecto y Arquitectura

El proyecto sigue una arquitectura modular y escalable, organizada por funcionalidades (`features`).

-   `sandav/`
    -   `public/`: Archivos estáticos.
    -   `src/`: Código fuente de la aplicación.
        -   `__tests__/`: Tests unitarios y de integración.
        -   `api/`: Lógica para interactuar con la PokeAPI.
        -   `app/`: Configuración central de la aplicación (router, providers).
        -   `assets/`: Iconos y otros recursos gráficos.
        -   `components/`: Componentes de UI reutilizables y genéricos (`Button`, `Card`, `Layout`, etc.).
        -   `features/`: El corazón de la aplicación, organizado por dominio de negocio. Cada `feature` contiene sus propios componentes, rutas, lógica y hooks.
            -   `battle-simulation/`: Todo lo relacionado con la simulación y resultados de batallas.
            -   `team-management/`: Creación, edición y listado de equipos.
        -   `hooks/`: Hooks personalizados reutilizables en toda la aplicación.
        -   `store/`: Stores de Zustand para la gestión del estado global (equipos, tema).
        -   `theme/`: Configuración de `styled-components` (temas claro/oscuro, estilos globales).
        -   `utils/`: Funciones de utilidad.
    -   `*.config.js`: Archivos de configuración para Vite, Babel y Jest.
    -   `package.json`: Dependencias y scripts del proyecto.

---
*Desarrollado con ❤️ por un AI Assistant.*

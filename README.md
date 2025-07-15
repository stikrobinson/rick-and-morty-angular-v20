# Rick and Morty - Desafío con Angular

Este proyecto es una guía de aprendizaje diseñada para practicar conceptos modernos de Angular (v17+) construyendo una pequeña aplicación que consume la API de Rick and Morty.

## Objetivo del Desafío

Tu misión es completar el código de la aplicación siguiendo la guía. Para ello, descarga y abre el archivo "Guía de Práctica Rick and Morty con Angular 20.pdf" en tu navegador para visualizar todo el contenido y seguir las instrucciones.

Al finalizar, tendrás una aplicación funcional que puede:
-   Mostrar una lista de personajes de Rick and Morty.
-   Buscar personajes por nombre.
-   Manejar estados de carga y error.

## Conceptos Clave a Practicar

-   **Componentes Standalone:** La nueva arquitectura por defecto en Angular.
-   **Inyección de Dependencias con `inject()`:** La forma moderna de inyectar servicios.
-   **Manejo de Estado con Señales (`signals` y `computed`):** La nueva primitiva de reactividad de Angular.
-   **Consumo de APIs con `HttpClient`:** Realizar peticiones HTTP a un servicio externo. Para este proyecto, se utiliza la [API de Rick and Morty](https://rickandmortyapi.com/documentation/).
-   **Nuevo Control de Flujo (`@for`, `@if`):** La sintaxis declarativa para templates introducida en Angular 17.
-   **Two-Way Data Binding con `[(ngModel)]`:** Enlazar datos entre el componente y el template.

## Cómo Empezar

1.  **Fork del Repositorio:** Antes que nada, haz un **fork** de este repositorio a tu propia cuenta de GitHub. Esto te permitirá guardar tus cambios.

2.  **Clonar tu Fork:**
    ```bash
    # Reemplaza TU_USUARIO_DE_GITHUB con tu nombre de usuario
    git clone https://github.com/TU_USUARIO_DE_GITHUB/rick-and-morty-angular-v20.git
    ```

3.  **Navegar al directorio del proyecto:**
    ```bash
    cd rick-and-morty-angular-v20
    ```

3.  **Instalar dependencias:**
    ```bash
    npm install
    ```

4.  **Ejecutar el servidor de desarrollo:**
    ```bash
    ng serve
    ```
    Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si guardas cambios en los archivos fuente.

---

## Estructura del Proyecto y Guía de Archivos

Entender la función de cada archivo es clave para completar el desafío. Aquí tienes un desglose de los archivos más importantes que deberás modificar:

```
src/
└── app/
    ├── models/
    │   └── character.ts      # (1) Define la "forma" de los datos.
    ├── services/
    │   └── api.ts            # (2) Obtiene los datos de la API.
    ├── components/
    │   └── character-list/
    │       ├── character-list.ts       # (3) La lógica del componente.
    │       ├── character-list.html     # (4) La vista (lo que se ve).
    │       └── character-list.scss     # (5) Los estilos.
    ├── app.config.ts         # (6) Configuración principal de la app.
    └── app.html              # (7) El "marco" principal de la página.
```

### Descripción de Archivos

1.  **`models/character.ts`**
    -   **Función:** Define las interfaces de TypeScript (`Character`, `ApiResponse`). Le dice a nuestro código qué estructura y qué propiedades tienen los datos que recibimos de la API. Es como un contrato o un plano de los datos.

2.  **`services/api.ts`**
    -   **Función:** Es el encargado de la comunicación con el exterior. Contiene la lógica para hacer las peticiones HTTP a la API de Rick and Morty. Aquí implementarás los métodos para obtener y buscar personajes.

3.  **`components/character-list/character-list.ts`**
    -   **Función:** Es el cerebro del componente. Aquí escribirás la lógica en TypeScript para manejar las interacciones del usuario, llamar al `Api` service para pedirle datos y gestionar el estado (qué personajes se muestran, si está cargando, etc.).

4.  **`components/character-list/character-list.html`**
    -   **Función:** Es el esqueleto visual del componente. Define la estructura de lo que el usuario ve en pantalla, usando HTML. Aquí usarás el control de flujo (`@for`, `@if`) para mostrar la lista de personajes y los estados de carga o error.

5.  **`components/character-list/character-list.scss`**
    -   **Función:** Contiene los estilos (colores, tamaños, posicionamiento) que se aplican exclusivamente al `character-list.html`, dándole su apariencia visual.

6.  **`app.config.ts`**
    -   **Función:** Es el archivo de configuración central de la aplicación. Aquí se registran los proveedores de servicios globales, como `provideHttpClient`, que es necesario para que las peticiones HTTP funcionen en toda la app.

7.  **`app.html`**
    -   **Función:** Es la plantilla principal de la aplicación. Actúa como un contenedor o "marco" donde se renderizarán los demás componentes. Aquí es donde colocarás el selector de tu `character-list` para que se muestre en la página.

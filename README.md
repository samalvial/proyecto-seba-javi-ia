# Proyecto Seba-Javi IA

Estructura del proyecto con Frontend y BFF separados.

## Estructura

```
proyecto-seba-javi-ia/
├── frontend/
│   ├── index.html       # Página principal
│   ├── styles.css       # Estilos
│   └── script.js        # Lógica del cliente
└── bff/
    ├── server.js        # Servidor Express
    ├── package.json     # Dependencias
    └── README.md        # Documentación del BFF
```

## Instalación y uso

### Frontend
Los archivos están listos para usar. Simplemente abre `frontend/index.html` en tu navegador.

### BFF
1. Navega a la carpeta `bff`
2. Ejecuta `npm install` para instalar dependencias
3. Ejecuta `npm start` para iniciar el servidor en puerto 3001
4. Accede a `http://localhost:3001` en tu navegador

## Características

- **Frontend**: Página web con botón interactivo que muestra "¡Hola Mundo!"
- **BFF**: Servidor Express con endpoint `/api/saludo` para futuras expansiones
- **Separación de capas**: Frontend y BFF en carpetas independientes

## API Endpoints

- `GET /api/saludo` - Devuelve el saludo
- `GET /api/health` - Verifica el estado del servidor

# Proyecto Seba-Javi IA

Proyecto interactivo con una animación tipo Apple que redirige a YouTube.

## Estructura

```
proyecto-seba-javi-ia/
├── frontend/
│   ├── index.html      # HTML principal
│   ├── styles.css      # Estilos con animaciones Apple
│   └── script.js       # Lógica de interacción
├── bff/
│   ├── server.js       # Servidor Express
│   ├── package.json    # Dependencias
│   └── package-lock.json
└── README.md           # Este archivo
```

## Características

- 🎬 **Animación tipo Apple**: Efecto de transición suave con overlay circular
- ✨ **Partículas flotantes**: 12 partículas que se dispersan al hacer clic
- 🎯 **Efecto de pulso**: Onda expansiva en el botón
- 🚀 **Redirección a YouTube**: Después de 0.8 segundos de animación

## Requisitos

- Node.js 14+
- npm

## Instalación

```bash
# Navegar al directorio bff
cd bff

# Instalar dependencias
npm install
```

## Ejecutar

```bash
# En el directorio bff/
npm start
```

El servidor se ejecutará en `http://localhost:3001`

## API

- `GET /api/saludo` - Retorna un mensaje de saludo
- `GET /api/health` - Verifica el estado del servidor

## Tecnologías

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Express.js, CORS
- **Animaciones**: CSS3 Keyframes, JavaScript Web Animation API

## Autor

Seba & Javi

## Licencia

MIT

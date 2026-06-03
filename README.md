# Portfolio Personal - Mario A.

Portfolio neofuturista con diseño estilo Omarchy, colores morados y negros.

## 🎨 Características

- **Diseño neofuturista** con glassmorphism y efectos de glow
- **Cursor personalizado** con efecto trail morado
- **Fondo animado** con sistema de partículas conectadas
- **Iconos Lucide** integrados perfectamente con el diseño
- **Foto de perfil de GitHub** sincronizada automáticamente
- **Animaciones suaves** al hacer scroll (AOS library)
- **Responsive** para móviles y tablets

## 🛠️ Tecnologías

- **Vue 3** (vía CDN)
- **Lucide Icons** - Iconos modernos y limpios
- **AOS** - Animate On Scroll
- **Canvas API** - Sistema de partículas personalizado
- **CSS puro** con variables y animaciones

## 📁 Estructura

```
portfolio-personal/
├── index.html      # HTML principal con Vue
├── styles.css      # Estilos personalizados
├── app.js          # Lógica Vue y cursor
├── particles.js    # Sistema de partículas animadas
└── README.md       # Este archivo
```

## 🚀 Uso

Simplemente abre `index.html` en tu navegador. No necesitas servidor ni instalaciones.

## 🎨 Personalización

### Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --purple-500: #6b46c1;
    --purple-400: #8b5cf6;
    /* ... más colores */
}
```

### Partículas
Ajusta la cantidad y comportamiento en `particles.js`:
```javascript
this.particleCount = 80;        // Número de partículas
this.maxDistance = 150;         // Distancia de conexión
```

### Foto de perfil
Se carga automáticamente desde GitHub. Si actualizas tu foto en GitHub, se actualizará aquí también:
```html
<img src="https://github.com/marioarnedo98.png" alt="Mario A.">
```

## 📝 Secciones

1. **Hero** - Presentación con ventana de código
2. **Sobre mí** - Perfil personal con toque irónico
3. **Stack técnico** - Tecnologías organizadas por categoría
4. **Proyectos** - Proyectos destacados con descripción
5. **Contacto** - Información de contacto

## 🔗 Enlaces

- Email: marioarnedo1@gmail.com
- GitHub: https://github.com/marioarnedo98
- LinkedIn: [Añadir tu enlace]

---

Desarrollado con ❤️ y Vue.js

# Portafolio de Daniel Santos

Portafolio bilingüe en Angular y Tailwind CSS. Incluye perfil profesional, tecnologías, el proyecto Arsotek y los canales de contacto.

## Desarrollo local

Requiere Node.js 22.12 o superior dentro de la rama 22 y npm.

```bash
npm ci
npm start
```

Angular muestra la dirección local al iniciar.

## Publicación

En el repositorio de GitHub, elige **Settings → Pages → Source → GitHub Actions**. El flujo **Publicar portafolio** genera y despliega el sitio con cada actualización de `main`. También puedes iniciar el flujo manualmente desde **Actions**.

Para reproducir la compilación de GitHub Pages:

```bash
npm run build -- --base-href ./
```

La salida está en `dist/daniel-santos-ai-portfolio/browser`.

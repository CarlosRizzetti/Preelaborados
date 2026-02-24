# Instrucciones para agentes de IA (Copilot)

Breve: este repositorio es una web estática de recetas (HTML/JS) que carga datos de recetas desde módulos JS en la carpeta `JSON/` y monta vistas mediante clases en `js/`.

Arquitectura general
- Entrada principal: `index.html` carga `js/index.js` como módulo ES.
- Hoja de impresión: `hojaDeImpresion.html` + `js/hojaDeImpresion.js` — lee `?sector=...` y decide qué clase/JSON importar.
- Datos: cada receta/dataset está en `JSON/*.js` y exporta una constante (p. ej. `export const Masa = [...]`).
- Componentes: `js/*Clase.js` contienen clases con métodos `render*()` que inyectan HTML en el DOM.

Patrones y convenciones del proyecto
- Los valores de `sector` en la query string (p. ej. `?sector=Masa`) deben coincidir exactamente con los strings usados en `hojaDeImpresion.js` (sensible a mayúsculas/español). Mantener consistencia al añadir nuevas entradas.
- Nombres de los archivos JSON suelen estar en mayúsculas (p. ej. `MASA.js`) pero exportan constantes con nombres habituales: `Masa`, `flanesReceta`, etc. Asegúrate de importar el identificador exportado correcto.
- DOM: se usan IDs y `innerHTML` para renderizado rápido. Elementos clave en `js/CONST.js`:
  - `header` — encabezado que se reemplaza dinámicamente
  - `hojaImpresionContainer` — contenedor principal donde se inyectan recetas
  - `inputCantidadMasa` — input para calcular cantidades en `mostrarRecetaDeMasa`

Cómo añadir una nueva receta (pasos prácticos)
1. Añadir un nuevo `JSON/MY_RECIPE.js` que exporte una constante (ej.: `export const myRecipe = [...]`).
2. Crear (o reutilizar) una clase en `js/` que renderice la UI relacionada, p. ej. `MyRecipeClase.js` con `renderMyRecipe()`.
3. En `js/hojaDeImpresion.js` añadir una rama `if (sector === "My Recipe")` que importe la clase y/o JSON e invoque el render y/o `mostrarRecetaDeMasa()` según convenga.
4. En `js/index.js` añadir un botón que enlace a `hojaDeImpresion.html?sector=My%20Recipe` (respetar espacios/encoding).

Flujos de desarrollo y debugging
- Servidor local: abrir módulos ES desde `file://` puede fallar; usa un servidor estático. Opciones:
  - Python: `python -m http.server 8000`
  - Node: `npx http-server` o la extensión Live Server de VS Code
- Abrir la consola del navegador para errores de importación (ruta incorrecta, nombre exportado distinto) o errores de referencia DOM (IDs cambiados).
- Errores comunes:
  - "Failed to fetch module" → ruta relativa incorrecta entre módulos (ver imports como `../JSON/...`)
  - `undefined is not a function` → nombre de export/import mal escrito (p. ej. `Masa` vs `MASA`)

Notas específicas detectadas en el código
- `js/index.js` inyecta botones que apuntan a `hojaDeImpresion.html?sector=...` — cualquier cambio en esos textos requiere un ajuste paralelo en `hojaDeImpresion.js`.
- `js/FUCIONES.js` expone `mostrarRecetaDeMasa(input, MasaSeleccionada)` que espera un array de objetos `{nombre, cantidad}`. Ejemplo: `JSON/MASA.js`.
- Impresión: hay un botón con `onclick="window.print()"` en `hojaDeImpresion.js` — conservar si se espera imprimir desde esa vista.

Sugerencias para agentes al editar
- Cambios que afectan rutas o nombres de exportación requieren revisar todas las importaciones en `js/hojaDeImpresion.js` y `js/index.js`.
- Al agregar un JSON nuevo, seguir la estructura `{ nombre, cantidad }` para que `mostrarRecetaDeMasa` funcione sin cambios.
- Mantener consistencia en los valores de `sector` (uso literal en query string y comparaciones).

Dónde mirar primero (archivos clave)
- `index.html` — entrada principal
- `hojaDeImpresion.html` — vista de receta/impresión
- `js/index.js`, `js/hojaDeImpresion.js`, `js/CONST.js`, `js/FUCIONES.js`
- `JSON/*.js` — datasets de recetas (ej.: `JSON/MASA.js`)

Contactar al mantenedor: pedir confirmación sobre valores de `sector` y convenciones de exportación antes de renombrar archivos o identifiers.

— Fin —
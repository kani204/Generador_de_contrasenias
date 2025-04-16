# Generador de Contraseñas - Proyecto EEST N.º 1

Este es un proyecto para la materia de Diseño e Implementación de Sitios Web Dinámicos de la EEST N.º 1 "Eduardo Ader" de Vicente López.

## Descripción

Este proyecto es un generador de contraseñas que permite crear contraseñas seguras con diferentes opciones de personalización:

- Ajustar la longitud de la contraseña
- Incluir mayúsculas
- Incluir números
- Incluir símbolos

## Errores corregidos

### En el HTML:
- Corregido: Faltaba la L en `<!DOCTYPE htm>` → `<!DOCTYPE html>`
- Corregido: Charset mal escrito `UTF8` → `UTF-8`
- Corregido: Referencia al archivo de script incorrecta `scrip.js` → `script.js`
- Corregido: Error en el ID del slider `lenght` → `length`
- Agregado: Mensaje de confirmación cuando se copia la contraseña

### En el CSS:
- Corregido: Valor de opacidad en box-shadow `rgba(0, 0, 0, 0,1)` → `rgba(0, 0, 0, 0.1)`
- Corregido: Clase mal escrita `.lenghtValue` → `.lengthValue`
- Agregado: Estilos para el mensaje de copia
- Agregado: Media query para hacer la página responsive

### En el JavaScript:
- Corregido: ID incorrecto `lenght` → `length`
- Corregido: Variable mal escrita `passsword` → `password` (tenía una s de más)
- Corregido: Condición incorrecta en el bucle `i <= length` → `i < length`
- Agregado: Verificación para no copiar si no hay contraseña
- Agregado: Mensaje visual en vez de alerta cuando se copia
- Agregado: Inclusión de mayúsculas, números y símbolos según las opciones elegidas
- Agregado: Generación inicial de contraseña al cargar la página

## Demo Online

Puedes ver la demo en vivo en [este enlace](https://generador-de-contrasenias-opal.vercel.app/).

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript

## Cómo usar

1. Abre el index.html en tu navegador
2. Selecciona la longitud deseada con el slider
3. Marca las opciones que quieras incluir (mayúsculas, números, símbolos)
4. Haz clic en "Generar Contraseña"
5. Copia la contraseña con el botón "Copiar"
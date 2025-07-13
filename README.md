# Frontend - Test Data Center Recargas App

Este proyecto es el **frontend** de una aplicación para realizar recargas de diferentes operadores, construido con **Angular 18**, **Bootstrap 5** y consumo de APIs RESTful documentadas con Swagger.

---

## ⚙️ Requisitos Previos

- Node.js `18.x` o superior
- Angular CLI `16+`
- Puerto `4200` libre en tu máquina

---

## ▶️ Ejecución del Proyecto

1. Clona el repositorio (si no lo hiciste aún):

   ```bash
   git clone https://github.com/afrancom2/test-data-center
   cd test-data-center/frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   ng serve
   ```

4. Abre el navegador en:

   [http://localhost:4200](http://localhost:4200)

---

## 🚀 Funcionalidades

- Registro de recargas con validación de formulario.
- Consulta de recargas por operador y vendedor.
- Manejo de errores amigables al usuario.
- Validaciones avanzadas (como máximo dos decimales).
- Estilo visual usando Bootstrap 5.

---

## 🧪 Validaciones del Formulario

- Solo se permiten valores numéricos válidos para el monto.
- El monto debe ser mayor a 0 y tener máximo 2 decimales.
- El operador y vendedor deben ser seleccionados.
- Se utiliza `SweetAlert2` para retroalimentación visual.

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── application/       # Lógica de negocio (facades)
│   ├── core/              # Modelos e interfaces con puertos
│   ├── infraestructure/   # Servicios
│   ├── presentation/      # Componentes visuales (form, list)
│   ├── shared/            # Pipes, validadores, servicios comunes
│   └── app.config.ts      # Configuración principal
├── assets/                # Recursos estáticos (íconos, estilos, etc.)
├── environments/          # Configuraciones por entorno
├── index.html             # Entrada de la app
└── styles.scss            # Estilos globales (Bootstrap incluido)
```

---

## 🛠 Tecnologías Utilizadas

- Angular 18
- Bootstrap 5
- SweetAlert2
- RxJS
- TypeScript
- HTML + SCSS

---

## 📦 Librerías Instaladas

```bash
npm install bootstrap
npm install sweetalert2
```

Asegúrate de incluir Bootstrap en `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
],
"scripts": [
  "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
]
```

---

## 🌐 Comunicación con Backend

- Todos los datos son consumidos desde el backend Java (Spring Boot) a través de servicios (`HttpClient`) encapsulados en **facades** para mantener una arquitectura limpia y desacoplada.

---

## 👨‍💻 Autor

Andrés Felipe Franco Monroy  
GitHub: [https://github.com/afrancom2](https://github.com/afrancom2)  
Email: afrancom2@gmail.com  

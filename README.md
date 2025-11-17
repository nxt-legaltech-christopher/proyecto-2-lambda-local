# Lambda ToDo API (Simulación Local)

Este proyecto es una **simulación local** de un endpoint AWS Lambda para gestionar tareas (to-do items). Permite crear y consultar tareas usando TypeScript, sin necesidad de AWS.

## 🚀 Despliegue en vivo

El proyecto está desplegado en Render y accesible públicamente:

- **URL Base**: https://lambda-todo-local.onrender.com/
- **Endpoints**: 
  - `GET /todos` - Obtener todas las tareas
  - `POST /todos` - Crear una nueva tarea

---

- **GET**: Devuelve todas las tareas almacenadas en memoria.
- **POST**: Crea una nueva tarea. Requiere enviar el campo `titulo`.
- **IDs únicos**: Cada tarea recibe un id generado automáticamente con `uuid`.
- **Persistencia temporal**: Las tareas se guardan en memoria mientras la app está corriendo (simulación de base de datos).
- **Validación robusta**: Validación de título con longitud mínima (3) y máxima (100) caracteres.
- **Manejo de errores**: Códigos HTTP correctos y mensajes de error descriptivos.
- **Tests unitarios**: Suite de 10 tests con Vitest para garantizar calidad.

## Tecnologías usadas

- TypeScript
- Node.js
- Express.js (servidor HTTP)
- [uuid](https://www.npmjs.com/package/uuid) (para generar IDs)
- [Vitest](https://vitest.dev/) (testing)
- Estructura modular profesional para simular Lambda de AWS

## Estructura del proyecto

```text
lambda-todo/
├─ src/
│   ├─ handler.ts           # Función simulada tipo Lambda
│   ├─ service.ts           # Lógica de negocio (CRUD de tareas)
│   ├─ types.ts             # Tipos TypeScript
│   ├─ handler.test.ts      # Tests unitarios con Vitest
│   ├─ server.ts            # Servidor Express
│   ├─ local-test.ts        # Simulación local de GET/POST
│   └─ utils/
│       └─ response.ts      # Utilidades de respuesta estándar Lambda
├─ package.json             # Dependencias y scripts
├─ tsconfig.json            # Configuración de TypeScript
└─ README.md                # Este archivo
```

## Instalación y ejecución

1. **Clona el repositorio:**
	```bash
	git clone <url-del-repo>
	cd lambda-todo
	```

2. **Instala dependencias:**
	```bash
	npm install
	```

3. **Compila TypeScript a JavaScript:**
	```bash
	npm run build
	```

4. **Ejecuta los tests:**
	```bash
	npm test
	```

5. **Ejecuta el servidor local:**
	```bash
	npm start
	```

   Deberías ver en consola:
	```text
	Servidor escuchando en puerto 3000
	```

---

## ¿Por qué el proyecto no tiene datos persistentes?

Este proyecto **almacena datos en memoria** (variable `fakeDatabase` en `service.ts`), lo que significa:

✅ **Mientras la app está corriendo**: Los datos se guardan y puedes consultarlos.  
❌ **Cuando la app se reinicia**: Los datos se pierden.

### Razones de este diseño:

1. **Simulación realista de Lambda**: AWS Lambda es *stateless*. No guarda estado entre ejecuciones. Este proyecto simula ese comportamiento.
2. **Sin base de datos externa**: Para mantener simplicidad. Una app real usaría DynamoDB, PostgreSQL o MongoDB.
3. **Render reinicia periódicamente**: Render puede reiniciar tu app cuando:
   - No recibe peticiones por mucho tiempo (free tier)
   - Hay actualizaciones de sistema
   - Se alcanza límite de memoria

### Si quieres persistencia real:

Conecta una base de datos (ej. MongoDB Atlas gratuito):
```typescript
// En service.ts, en lugar de fakeDatabase
import mongoose from 'mongoose';
const Todo = mongoose.model('Todo', todoSchema);
export const getAllTodos = async () => await Todo.find();
```

---

## 📖 Cómo funcionan los endpoints

## 📋 Pruebas locales con curl

Si ejecutas `npm start` en tu máquina local, el servidor estará en `http://localhost:3000`:

**GET local**:
```bash
curl http://localhost:3000/todos
```

**POST local**:
```bash
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Mi tarea local"}'
```

---

## ✅ Mejoras implementadas

### ✅ Validación robusta del POST
- ✓ Título debe ser string (no números ni otros tipos)
- ✓ Longitud mínima: 3 caracteres
- ✓ Longitud máxima: 100 caracteres
- ✓ No permite títulos vacíos o solo espacios en blanco
- ✓ Trim automático de espacios
- ✓ Mensajes de error descriptivos para cada validación

### ✅ Arquitectura profesional (similar a AWS)
- ✓ **handler.ts**: Lógica principal tipo Lambda
- ✓ **service.ts**: Lógica de negocio separada (CRUD)
- ✓ **utils/response.ts**: Helpers para respuestas HTTP estándar
- ✓ **server.ts**: Servidor Express que expone la API
- ✓ Separación clara de responsabilidades
- ✓ Fácil de escalar y mantener

### ✅ Testing completo (QA como profesional)
- ✓ 10 tests unitarios con Vitest
- ✓ Cubre validación, errores y casos de éxito
- ✓ Ejecuta con `npm test`
- ✓ Demuestra calidad de código

### ✅ Despliegue en producción
- ✓ API desplegada en Render
- ✓ Accesible públicamente
- ✓ CI/CD automático desde GitHub

## Notas

- Este proyecto simula una función Lambda de AWS con arquitectura profesional.
- Para producción real, se podría desplegar en AWS Lambda y conectar con DynamoDB.
- Cumple con estándares de calidad: validación, tests, estructura modular y códigos HTTP correctos.

## Créditos

📅 Proyecto desarrollado como parte de la Prueba Técnica - NXT Abogados (Parte 2)
👨‍💻 Autor: Christopher Eduardo Valdivia Baca
📍 Lima, Perú
git clone <url-del-repo>
npm install
npm run build
npm start

# Lambda ToDo API (Simulación Local)

Este proyecto es una **simulación local** de un endpoint AWS Lambda para gestionar tareas (to-do items). Permite crear y consultar tareas usando TypeScript, sin necesidad de AWS.

## Funcionalidades

- **GET**: Devuelve todas las tareas almacenadas en memoria.
- **POST**: Crea una nueva tarea. Requiere enviar el campo `titulo`.
- **IDs únicos**: Cada tarea recibe un id generado automáticamente con `uuid`.
- **Persistencia temporal**: Las tareas se guardan en memoria mientras la app está corriendo (simulación de base de datos).

## Tecnologías usadas

- TypeScript
- Node.js
- [uuid](https://www.npmjs.com/package/uuid) (para generar IDs)
- Estructura modular para simular Lambda de AWS

## Estructura del proyecto

```text
lambda-todo/
├─ src/
│   ├─ handler.ts       # Función simulada tipo Lambda
│   ├─ types.ts         # Tipos TypeScript
│   └─ local-test.ts    # Simulación local de GET/POST
├─ package.json         # Dependencias y scripts
├─ tsconfig.json        # Configuración de TypeScript
└─ README.md            # Este archivo
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

4. **Ejecuta la simulación local:**
	```bash
	npm start
	```

Deberías ver en consola algo como:

```text
📩 POST creando tarea...
Respuesta POST: { statusCode: 200, body: '{"id":"...","titulo":"Aprender AWS Lambda","completada":false}' }

📖 GET obteniendo tareas...
Respuesta GET: { statusCode: 200, body: '[{"id":"...","titulo":"Aprender AWS Lambda","completada":false}]' }
```

## Cómo probar nuevas tareas

En `src/local-test.ts` puedes cambiar el título en el POST para crear nuevas tareas:

```ts
body: JSON.stringify({ titulo: "Nuevo título de tarea" })
```

## Notas

- Este proyecto simula la función Lambda de AWS sin necesidad de tener cuenta ni usar DynamoDB.
- Para producción real, la función handler se podría desplegar en AWS Lambda y conectar con DynamoDB.
- Cumple con los requerimientos de la prueba técnica: GET, POST, validación y códigos HTTP correctos.

## Créditos

Proyecto desarrollado como parte de la prueba técnica de NXT Legaltech.

Inspirado en el ejemplo de AWS Lambda para gestión de tareas.
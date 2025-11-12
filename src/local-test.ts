import { handler } from "./handler";

async function test() {
  console.log("📩 POST creando tarea...");
  const postResponse = await handler({
    httpMethod: "POST",
    body: JSON.stringify({ titulo: "Aprender AWS Lambda" }),
  });
  console.log("Respuesta POST:", postResponse);

  console.log("📖 GET obteniendo tareas...");
  const getResponse = await handler({ httpMethod: "GET" });
  console.log("Respuesta GET:", getResponse);
}

test();

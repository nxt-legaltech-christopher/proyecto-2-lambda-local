import { v4 as uuidv4 } from "uuid";
import { ToDoItem } from "./types";

const fakeDatabase: ToDoItem[] = [];

export const handler = async (event: any) => {
  const method = event.httpMethod;

  try {
    if (method === "GET") {
      return { statusCode: 200, body: JSON.stringify(fakeDatabase) };
    }

    if (method === "POST") {
      const body = JSON.parse(event.body);

      if (!body.titulo || typeof body.titulo !== "string") {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: "El campo 'titulo' es obligatorio." }),
        };
      }

      const newItem: ToDoItem = {
        id: uuidv4(),
        titulo: body.titulo,
        completada: false,
      };

      fakeDatabase.push(newItem);

      return { statusCode: 200, body: JSON.stringify(newItem) };
    }

    return { statusCode: 405, body: "Método no permitido" };
  } catch (error: any) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};

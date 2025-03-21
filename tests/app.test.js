const request = require("supertest");
const { app, server } = require("../app"); // Importa server también

describe("GET /", () => {
    test("Debe responder con un mensaje de bienvenida", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("¡Hola, mundo!");
    });
});

afterAll(() => {
    server.close(); // Cerramos el servidor después de las pruebas
});

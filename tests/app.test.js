const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    test("Debe responder con un mensaje de bienvenida", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("¡Hola, mundo!");
    });
});

import { blobs } from "@netlify/blobs";

export async function handler(event) {
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Metodo non consentito"
        };
    }

    try {
        const menuData = event.body;

        const storage = blobs();
        await storage.set("menu.json", menuData);

        return {
            statusCode: 200,
            body: "Menu salvato correttamente"
        };

    } catch (err) {
        return {
            statusCode: 500,
            body: "Errore: " + err
        };
    }
}

import prompt from "prompt";
import promptSchemaHash from "../../prompts-schema/prompt-schema-hash.js"
import handle from "./handle.js";

export default async function createHash(text) {
    try {
        // Encriptado de texto 
        prompt.get(promptSchemaHash, handle);
        prompt.start();
    } catch (error) {
        console.error("Erro ao criar hash:", error);
    }
}
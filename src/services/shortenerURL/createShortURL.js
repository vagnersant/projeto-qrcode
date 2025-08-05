import prompt from "prompt";
import handle from "./handle.js";
import promptSchemaShortURL from "../../prompts-schema/prompt-schema-shorturl.js"

async function createShortURL() {
    // Obter a URL do usuário e chamar seu manipulador
    prompt.start();
    prompt.get(promptSchemaShortURL, handle);
}

export default createShortURL;
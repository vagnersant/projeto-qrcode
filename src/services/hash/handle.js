import { cripto } from "cripto"

async function handle(err, result) {
    if (err) {
        console.error("Erro ao criar hash:", err);
        return;
    }

    // Encriptado de texto 
    let encriptado = cripto.toCode(result.text);
    console.log('encriptado', encriptado);
    let text = cripto.toText(encriptado);
    console.log('desencriptado', text);
}

export default handle;

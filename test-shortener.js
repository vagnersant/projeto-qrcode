import shortnerURL from "node-url-shortener";

console.log("Testando a biblioteca node-url-shortener...");
console.log("Objeto shortnerURL:", shortnerURL);
console.log("Método short disponível:", typeof shortnerURL.short);

// Teste básico
const testUrl = "https://www.google.com";
console.log("Tentando encurtar:", testUrl);

try {
    shortnerURL.short(testUrl, (err, res) => {
        if (err) {
            console.error("Erro:", err);
        } else {
            console.log("Resultado:", res);
        }
    });
} catch (error) {
    console.error("Erro ao executar:", error);
}

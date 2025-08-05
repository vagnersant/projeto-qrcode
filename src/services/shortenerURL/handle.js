export default async function handle(err, result) {
    if (err) {
        console.error("Erro ao obter URL:", err);
        return;
    }
    
    const url = result.url;
    
    // Validar se a URL foi fornecida
    if (!url) {
        console.error("URL não fornecida");
        return;
    }
    
    // Lógica para encurtar a URL usando TinyURL API
    console.log("Encurtando URL:", url);
    
    try {
        const tinyUrlApi = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`;
        
        const response = await fetch(tinyUrlApi);
        
        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }
        
        const shortUrl = await response.text();
        
        if (shortUrl.startsWith('http')) {
            console.log("URL encurtada com sucesso:", shortUrl);
        } else {
            console.error("Erro ao encurtar URL:", shortUrl);
        }
        
    } catch (error) {
        console.error("Erro ao encurtar URL:", error.message);
        
        // Fallback: tentar com node-url-shortener se TinyURL falhar
        console.log("Tentando método alternativo...");
        
        try {
            const shortnerURL = await import("node-url-shortener");
            shortnerURL.default.short(url, (err, res) => {
                if (err) {
                    console.error("Erro no método alternativo:", err);
                    return;
                }
                if (res) {
                    console.log("URL encurtada (método alternativo):", res);
                } else {
                    console.log("Não foi possível encurtar a URL");
                }
            });
        } catch (fallbackError) {
            console.error("Erro no fallback:", fallbackError.message);
        }
    }
}
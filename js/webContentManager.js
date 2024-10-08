import fs from 'fs';
import fetch from 'node-fetch';
import { JSDOM } from 'jsdom'; // Asegúrate de instalar jsdom si no lo tienes

const contentFilePath = 'content.json';

export function saveContentToFile(content) {
    fs.writeFileSync(contentFilePath, JSON.stringify({ content }), 'utf8');
}

export function getContentFromFile() {
    if (fs.existsSync(contentFilePath)) {
        const data = fs.readFileSync(contentFilePath, 'utf8');
        return JSON.parse(data).content;
    }
    return null;
}

export async function monitorWebContent(url, className) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        
        // Usar JSDOM para analizar el HTML y extraer el contenido de la clase específica
        const dom = new JSDOM(text);
        const content = dom.window.document.querySelector(`.${className}`)?.textContent || '';

        // Retorna el contenido de la clase específica
        return content;
    } catch (error) {
        console.error("Error al monitorear el contenido de la página:", error);
        return null; // Retorna null en caso de error
    }
}

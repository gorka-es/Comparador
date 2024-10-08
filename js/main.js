import { monitorWebContent, saveContentToFile, getContentFromFile } from './webContentManager.js';
import { config } from './config.js'; // Importa la configuración
import { logMessage } from './logger.js'; // Importa la función de log

// Usa la URL y la clase desde el archivo de configuración
const url = config.url;
const className = 'tu-clase-a-comparar'; // Cambia esto por la clase que deseas comparar

// Monitorea el contenido de la página
const newContent = await monitorWebContent(url, className);

// Compara el contenido nuevo con el contenido guardado
const storedContent = getContentFromFile();

if (storedContent !== newContent) {
    const message = config.messages.changesDetected; // Mensaje de cambios
    console.log(message); // Muestra el mensaje en consola
    logMessage(message); // Guarda el mensaje en el log
    saveContentToFile(newContent); // Guarda el nuevo contenido
} else {
    const message = config.messages.noChanges; // Mensaje de sin cambios
    console.log(message); // Muestra el mensaje en consola
    logMessage(message); // Guarda el mensaje en el log
}

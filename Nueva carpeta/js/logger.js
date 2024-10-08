import fs from 'fs';
import path from 'path';
import { formatInTimeZone } from 'date-fns-tz';

// Obtiene la ruta del directorio actual usando import.meta.url
const logDir = path.join(path.resolve(), 'log'); // Ruta de la carpeta log
const logFilePath = path.join(logDir, 'log.txt'); // Ruta del archivo de log

// Asegúrate de que la carpeta log exista
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir); // Crea la carpeta si no existe
}

export function logMessage(message) {
    // Obtiene la hora local en Madrid
    const madridTimeZone = 'Europe/Madrid';
    const localDate = new Date();
    const formattedTime = formatInTimeZone(localDate, madridTimeZone, 'yyyy-MM-dd HH:mm:ssXXX');

    const logEntry = `${formattedTime} - ${message}\n`; // Formato del mensaje de log

    fs.appendFileSync(logFilePath, logEntry, 'utf8'); // Escribe el mensaje en el archivo de log
}

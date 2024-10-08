// config.js
export const config = {
    url: 'https://sede.inap.gob.es/intervencion-tesoreria-entrada-acceso-libre-2020-2021-2022', // Cambia esta URL por la que desees monitorear
    className: 'journal-content-article', // Cambia esto por la clase que deseas comparar
    messages: {
        changesDetected: "Ha habido cambios en el contenido.",
        noChanges: "No ha habido cambios en el contenido."
    },
    intervalo: 300000 //Tiempo en milisegundos para la ejecucion automatica del codigo
};

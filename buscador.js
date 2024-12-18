// Diccionario con palabras clave asociadas a cada archivo HTML
const redirecciones = {
    "fisura.html": ["fisura", "muros", "grietas", "fisuras", "fisura de muros"],
    "derrumbes.html": ["derrumbes", "caida", "estructuras"],
    "humedad.html": ["humedad", "cimientos", "filtraciones", "humedad en cimientos"],
    "perdida.html": ["energia", "perdida", "aislamiento", "perdida de energia"],
    "desgaste.html": ["desgaste", "materiales", "erosion","desgaste en materiales"],
};

// Escuchar el evento de envío del formulario
document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Evitar recargar la página

    const query = document.getElementById("searchInput").value.toLowerCase().trim();

    // Buscar coincidencia de palabras clave
    let encontrado = false;
    for (const [archivo, palabrasClave] of Object.entries(redirecciones)) {
        if (palabrasClave.some((palabra) => query.includes(palabra))) {
            // Redirige al archivo HTML correspondiente si se encuentra una palabra clave
            window.location.href = archivo;
            encontrado = true;
            break;
        }
    }

    // Si no se encontró ninguna coincidencia, mostrar un mensaje
    if (!encontrado) {
        const resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = `<p>No se encontró información para "${query}". Por favor, intenta con otro término.</p>`;
    }
});

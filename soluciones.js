document.addEventListener('DOMContentLoaded', function () {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const diagnosticos = params.get("diagnosticos")?.split(",") || [];

    // Contenedor donde se mostrarán las soluciones
    const contenedor = document.getElementById("contenedor-soluciones");

    // Soluciones basadas en los diagnósticos
    const soluciones = {
        fisurasMuros: "Se detectaron problemas con fisuras en los muros. Recomendamos reforzar las paredes y aplicar sellantes especializados.",
        derrumbes: "Riesgo de derrumbes identificado. Se recomienda una inspección estructural inmediata y estabilización del terreno.",
        humedadCimientos: "Problemas de humedad en los cimientos. Asegúrese de implementar un sistema de drenaje adecuado y revisar la impermeabilización.",
        perdidaEnergia: "Pérdidas de energía detectadas. Considere mejorar el aislamiento térmico y revisar ventanas y puertas.",
        desgasteMateriales: "Materiales desgastados detectados. Se sugiere mantenimiento, reemplazo de partes dañadas y aplicar pintura protectora."
    };

    // Mostrar soluciones
    diagnosticos.forEach(diag => {
        if (soluciones[diag]) {
            const parrafo = document.createElement("p");
            parrafo.textContent = soluciones[diag];
            contenedor.appendChild(parrafo);
        }
    });
});

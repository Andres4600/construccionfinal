document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("boton").addEventListener("click", function () {
        // Definimos los contadores por categoría
        let fisurasMuros = 0;
        let derrumbes = 0;
        let humedadCimientos = 0;
        let perdidaEnergia = 0;
        let desgasteMateriales = 0;

        // Función para sumar puntos
        function contarPuntos(preguntas) {
            let puntos = 0;
            preguntas.forEach(pregunta => {
                let respuesta = document.querySelector(`input[name="${pregunta}"]:checked`);
                if (respuesta && respuesta.value === "si") {
                    puntos++;
                }
            });
            return puntos;
        }

        // Sumando puntos por categorías
        fisurasMuros = contarPuntos(["p1", "p2", "p3", "p4"]);
        derrumbes = contarPuntos(["p5", "p6", "p7", "p8"]);
        humedadCimientos = contarPuntos(["p9", "p10", "p11", "p12"]);
        perdidaEnergia = contarPuntos(["p13", "p14", "p15", "p16"]);
        desgasteMateriales = contarPuntos(["p17", "p18", "p19", "p20"]);

        // crearemos un diagnostico dependiendo del puntaje que tendremos
        let diagnosticos = [];
        if (fisurasMuros >= 3) diagnosticos.push("fisurasMuros");
        if (derrumbes >= 3) diagnosticos.push("derrumbes");
        if (humedadCimientos >= 3) diagnosticos.push("humedadCimientos");
        if (perdidaEnergia >= 3) diagnosticos.push("perdidaEnergia");
        if (desgasteMateriales >= 3) diagnosticos.push("desgasteMateriales");

        // Redirigimos a 'soluciones.html' con los diagnósticos
        if (diagnosticos.length > 0) {
            window.location.href = `soluciones.html?diagnosticos=${diagnosticos.join(",")}`;
        } else {
            alert("No se detectaron problemas significativos.");
        }
    });
});

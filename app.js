// Selección de elementos
const sendButton = document.getElementById("sendButton");
const userInput = document.getElementById("userInput");
const responseArea = document.getElementById("responseArea");

// Función para manejar el clic del botón
sendButton.addEventListener("click", function() {
    const userMessage = userInput.value.trim(); // Obtener el texto ingresado

    if (userMessage) {
        // Mostrar el área de respuesta mientras procesamos la consulta
        responseArea.style.display = "block";
        responseArea.textContent = "Cargando respuesta..."; // Mensaje de carga mientras obtenemos la respuesta

        // Enviar la consulta a la API
        fetch('https://api.openai.com/v1/completions', { // Cambia esta URL si es diferente
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // Cambia el modelo si es necesario
                prompt: userMessage,
                max_tokens: 150
            })
        })
        .then(response => response.json())
        .then(data => {
            // Mostrar la respuesta de la API
            if (data.choices && data.choices.length > 0) {
                responseArea.textContent = `Respuesta: ${data.choices[0].text.trim()}`; // Muestra la respuesta del modelo
            } else {
                responseArea.textContent = "No se obtuvo una respuesta válida de la API.";
            }
        })
        .catch(error => {
            // Si hay un error en la solicitud
            responseArea.textContent = "Hubo un error al obtener la respuesta. Intenta nuevamente.";
            console.error('Error:', error);
        });
    } else {
        // Si el campo está vacío
        responseArea.style.display = "block";
        responseArea.textContent = "Por favor, escribe tu consulta antes de enviar.";
    }

    // Limpiar el campo de texto después de enviar
    userInput.value = "";
});


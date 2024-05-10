// script.js
document.addEventListener("DOMContentLoaded", function() {
    var avisoCookies = document.getElementById("avisoCookies");
    var cookiesForm = document.getElementById("cookiesForm");
    var mainElement = document.getElementsByTagName('main')[0];

    // Comprobar si el usuario ya aceptó las cookies
    if (!cookiesAceptadas()) {
        mostrarAvisoCookies();
        mainElement.style.filter = 'blur(10px)';
        mainElement.style.pointerEvents = 'none';
    }

    // Ocultar el aviso de cookies si ya han sido aceptadas
    if (cookiesAceptadas()) {
        avisoCookies.style.display = "none";
    }

    // Mostrar el aviso de cookies
    function mostrarAvisoCookies() {
        avisoCookies.style.display = "block";
    }

    // Ocultar el aviso de cookies y almacenar las preferencias del usuario
    function aceptarCookies(event) {
        event.preventDefault();
        avisoCookies.style.display = "none";
        almacenarCookiesAceptadas();
        mainElement.style.filter = 'none';
        mainElement.style.pointerEvents = 'auto';
    }

    // Función para verificar si el usuario ya aceptó las cookies
    function cookiesAceptadas() {
        return localStorage.getItem("cookiesAceptadas") === "true";
    }

    // Función para almacenar las preferencias del usuario en el almacenamiento local
    function almacenarCookiesAceptadas() {
        var checkboxes = cookiesForm.querySelectorAll("input[type=checkbox]:checked");
        localStorage.setItem("cookiesAceptadas", "true");
        checkboxes.forEach(function(checkbox) {
            localStorage.setItem(checkbox.name, "true");
        });
    }

    // Agregar evento de envío al formulario de cookies
    cookiesForm.addEventListener("submit", aceptarCookies);

        
    function close(){
        close();
    };
});

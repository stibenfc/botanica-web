/* --- CONFIGURACIÓN DEL EFECTO MÁQUINA DE ESCRIBIR PARA BOTANICA MAGIA BLANCA --- */

// Esperamos a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    
    // Lista de servicios que quieres animar (puedes añadir o quitar aquí)
    const stringsToType = [
        'Amarres',
        'Endulzamientos',
        'Limpiezas',
        'Retornos',
        'Apertura de Caminos',
        'Protecciones'
    ];

    // Configuración de Typed.js
    var typed = new Typed('#typed-text', {
        strings: stringsToType, // Usamos la lista de arriba
        typeSpeed: 60, // Velocidad de escritura (en ms, más alto = más lento)
        backSpeed: 30, // Velocidad de borrado
        backDelay: 1500, // Tiempo de espera antes de empezar a borrar (1.5 seg)
        startDelay: 500, // Tiempo de espera antes de empezar el efecto (0.5 seg)
        loop: true, // El efecto se repetirá indefinidamente
        showCursor: true, // Muestra el cursor
        cursorChar: '|', // El carácter del cursor (como en tu imagen 2)
        autoInsertCss: true // Inserta el CSS básico para el cursor automáticamente
    });
});
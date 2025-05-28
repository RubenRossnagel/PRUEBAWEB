document.addEventListener('DOMContentLoaded', () => {
    const saludarBtn = document.getElementById('saludarBtn');
    const mensaje = document.getElementById('mensaje');

    saludarBtn.addEventListener('click', () => {
        mensaje.textContent = '¡Hola! Bienvenido a mi aplicación web.';
        mensaje.style.color = '#1a73e8';
    });
});

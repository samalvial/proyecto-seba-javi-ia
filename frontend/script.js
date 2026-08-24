document.getElementById('saludoBtn').addEventListener('click', function() {
    // Mostrar mensaje
    document.getElementById('mensaje').textContent = '¡Redirigiendo a YouTube!';
    
    // Agregar clase de pulso al botón
    this.classList.add('pulse');
    
    // Crear partículas
    createParticles(this);
    
    // Animar el overlay de transición
    const overlay = document.querySelector('.transition-overlay');
    overlay.classList.add('active');
    
    // Redirigir a YouTube después de la animación
    setTimeout(() => {
        window.location.href = 'https://www.youtube.com';
    }, 800);
});

function createParticles(button) {
    const particlesContainer = document.getElementById('particlesContainer');
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Crear múltiples partículas
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamaño aleatorio
        const size = Math.random() * 10 + 5;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        
        // Colores del gradiente
        const colors = ['#667eea', '#764ba2', '#ffffff'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        // Direcciones aleatorias
        const angle = (Math.PI * 2 * i) / 12;
        const velocity = Math.random() * 100 + 150;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity - 50;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        particlesContainer.appendChild(particle);
        
        // Remover partícula después de la animación
        setTimeout(() => {
            particle.remove();
        }, 1500);
    }
}


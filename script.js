// ============================================
// XV Años - Jennifer Guadalupe
// Anime-style Web Invitation
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initPetals();
    initCountdown();
    initScrollReveal();
    initSparkleTrail();
});

// ---- Floating Particles ----
function initParticles() {
    const container = document.getElementById('particles');
    const count = 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (6 + Math.random() * 8) + 's';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.width = (2 + Math.random() * 3) + 'px';
        particle.style.height = particle.style.width;
        particle.style.opacity = 0.3 + Math.random() * 0.5;

        const colors = ['#FFD700', '#FF6B6B', '#FF8888', '#FFECB3'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];

        container.appendChild(particle);
    }
}

// ---- Anime Falling Petals ----
function initPetals() {
    const container = document.getElementById('petals');
    const petalCount = 15;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (8 + Math.random() * 10) + 's';
        petal.style.animationDelay = Math.random() * 10 + 's';
        petal.style.width = (8 + Math.random() * 10) + 'px';
        petal.style.height = petal.style.width;

        const opacity = 0.3 + Math.random() * 0.4;
        petal.style.opacity = opacity;

        container.appendChild(petal);
    }
}

// ---- Countdown Timer ----
function initCountdown() {
    const eventDate = new Date('2026-06-27T17:00:00-06:00');

    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;

        if (diff <= 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ---- Scroll Reveal (Anime style) ----
function initScrollReveal() {
    const reveals = document.querySelectorAll('.anime-reveal, .anime-pop');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ---- Sparkle Cursor Trail ----
function initSparkleTrail() {
    const container = document.getElementById('sparkleContainer');
    let lastX = 0, lastY = 0;
    let throttle = false;

    document.addEventListener('mousemove', (e) => {
        if (throttle) return;
        throttle = true;
        setTimeout(() => throttle = false, 50);

        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > 10) {
            createSparkle(e.clientX, e.clientY);
            lastX = e.clientX;
            lastY = e.clientY;
        }
    });

    function createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = (x + (Math.random() - 0.5) * 10) + 'px';
        sparkle.style.top = (y + (Math.random() - 0.5) * 10) + 'px';
        container.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 600);
    }
}

// ---- Music Toggle (placeholder) ----
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    isPlaying = !isPlaying;
    musicToggle.classList.toggle('playing', isPlaying);
    // Audio can be added here:
    // const audio = document.getElementById('bgMusic');
    // isPlaying ? audio.play() : audio.pause();
});

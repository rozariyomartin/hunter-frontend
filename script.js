// ==========================================
// TEAM HUNTER - ELITE CTF WEBSITE JAVASCRIPT
// Anti-Gravity Physics Engine & Cyber Effects
// ==========================================

// ==========================================
// CONFIGURATION & STATE
// ==========================================
const config = {
    particles: {
        count: 100,
        speed: 0.3,
        connectionDistance: 120,
        color: '#00ff88',
        opacity: 0.3
    },
    antigravity: {
        enabled: true,
        repulsionForce: 80,
        repulsionRange: 150,
        returnSpeed: 0.05,
        floatSpeed: 0.001,
        floatAmplitude: 10
    },
    matrix: {
        fontSize: 14,
        speed: 1.5,
        density: 0.95
    }
};

let mouse = { x: 0, y: 0 };
let scrollY = 0;

// ==========================================
// TERMINAL INTRO ANIMATION
// ==========================================
function initTerminalIntro() {
    const intro = document.getElementById('terminal-intro');
    const lines = document.querySelectorAll('.terminal-line');

    let delay = 500;
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.remove('hidden');
        }, delay + (index * 800));
    });

    setTimeout(() => {
        intro.classList.add('hidden');
    }, delay + (lines.length * 800) + 1000);
}

// ==========================================
// CURSOR GLOW TRAIL
// ==========================================
function initCursorGlow() {
    const cursorGlow = document.getElementById('cursor-glow');

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
        cursorGlow.style.opacity = '0.6';
    });

    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });
}

// ==========================================
// PARTICLE NETWORK BACKGROUND
// ==========================================
class ParticleNetwork {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.resize();
        this.createParticles();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = document.documentElement.scrollHeight;
    }

    createParticles() {
        const particleCount = Math.floor((this.canvas.width * this.canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * config.particles.speed,
                vy: (Math.random() - 0.5) * config.particles.speed,
                radius: Math.random() * 2 + 1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update particles
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(0, 255, 136, ${config.particles.opacity})`;
            this.ctx.fill();
        });

        // Draw connections
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.particles.connectionDistance) {
                    const opacity = (1 - distance / config.particles.connectionDistance) * config.particles.opacity;
                    this.ctx.beginPath();
                    this.ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                    this.ctx.lineWidth = 1;
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.stroke();
                }
            }
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// MATRIX RAIN EFFECT
// ==========================================
class MatrixRain {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.columns = 0;
        this.drops = [];
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.columns = Math.floor(this.canvas.width / config.matrix.fontSize);
        this.drops = Array(this.columns).fill(1);
    }

    animate() {
        this.ctx.fillStyle = 'rgba(11, 15, 20, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = '#00ff88';
        this.ctx.font = `${config.matrix.fontSize}px monospace`;

        for (let i = 0; i < this.drops.length; i++) {
            const char = String.fromCharCode(0x30A0 + Math.random() * 96);
            const x = i * config.matrix.fontSize;
            const y = this.drops[i] * config.matrix.fontSize;

            this.ctx.fillText(char, x, y);

            if (y > this.canvas.height && Math.random() > config.matrix.density) {
                this.drops[i] = 0;
            }

            this.drops[i]++;
        }

        requestAnimationFrame(() => this.animate());
    }
}

// ==========================================
// ANTI-GRAVITY PHYSICS ENGINE
// ==========================================
class AntiGravityEngine {
    constructor() {
        this.elements = [];
        this.init();
    }

    init() {
        const floatingElements = document.querySelectorAll('.floating-element');

        floatingElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const data = {
                element: element,
                originalX: rect.left + rect.width / 2,
                originalY: rect.top + rect.height / 2 + scrollY,
                currentX: 0,
                currentY: 0,
                velocityX: 0,
                velocityY: 0,
                floatSpeed: parseFloat(element.dataset.floatSpeed) || 1,
                repel: element.dataset.repel === 'true',
                floatOffset: Math.random() * Math.PI * 2
            };
            this.elements.push(data);
        });

        this.animate();
    }

    update() {
        const time = Date.now() * 0.001;

        this.elements.forEach(data => {
            const rect = data.element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2 + scrollY;

            // Floating animation
            const floatY = Math.sin(time * config.antigravity.floatSpeed * data.floatSpeed * 1000 + data.floatOffset) *
                config.antigravity.floatAmplitude * data.floatSpeed;
            const floatX = Math.cos(time * config.antigravity.floatSpeed * data.floatSpeed * 500 + data.floatOffset) *
                config.antigravity.floatAmplitude * 0.5 * data.floatSpeed;

            // Anti-gravity repulsion from cursor
            let repulsionX = 0;
            let repulsionY = 0;

            if (data.repel) {
                const dx = centerX - mouse.x;
                const dy = centerY - (mouse.y + scrollY);
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.antigravity.repulsionRange) {
                    const force = (1 - distance / config.antigravity.repulsionRange) * config.antigravity.repulsionForce;
                    repulsionX = (dx / distance) * force;
                    repulsionY = (dy / distance) * force;
                }
            }

            // Apply forces with smooth interpolation
            data.velocityX += (repulsionX - data.currentX) * config.antigravity.returnSpeed;
            data.velocityY += (repulsionY - data.currentY) * config.antigravity.returnSpeed;

            // Damping
            data.velocityX *= 0.9;
            data.velocityY *= 0.9;

            // Update position
            data.currentX += data.velocityX;
            data.currentY += data.velocityY;

            // Apply transform
            const totalX = data.currentX + floatX;
            const totalY = data.currentY + floatY;

            data.element.style.transform = `translate(${totalX}px, ${totalY}px)`;
        });
    }

    animate() {
        this.update();
        requestAnimationFrame(() => this.animate());
    }

    refresh() {
        this.elements = [];
        this.init();
    }
}

// ==========================================
// ANIMATED COUNTERS
// ==========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = parseInt(entry.target.dataset.target);
                const duration = 2000;
                const steps = 60;
                const increment = target / steps;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target.toLocaleString();
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current).toLocaleString();
                    }
                }, duration / steps);
            }
        });
    }, observerOptions);

    counters.forEach(counter => observer.observe(counter));
}

// ==========================================
// SMOOTH SCROLL & PARALLAX
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

function handleScroll() {
    scrollY = window.scrollY;

    // Parallax effect on hero section
    const hero = document.querySelector('#hero');
    if (hero) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            const offset = scrollY * 0.5;
            heroContent.style.transform = `translateY(${offset}px)`;
            heroContent.style.opacity = 1 - (scrollY / 600);
        }
    }
}

// ==========================================
// MOBILE MENU
// ==========================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileBackdrop = document.getElementById('mobile-backdrop');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        if (mobileBackdrop) {
            mobileBackdrop.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        }
    }
}

// ==========================================
// FORM HANDLING
// ==========================================
function initFormHandling() {
    const form = document.getElementById('application-form');
    const formContainer = form?.parentElement;
    const successMessage = document.getElementById('form-success');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple validation
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            console.log('Application submitted:', data);

            // Show success message
            form.style.display = 'none';
            successMessage.classList.remove('hidden');

            // ==========================================
            // SECURE JOIN TEAM BACKEND INTEGRATION
            // ==========================================
            
            fetch("https://hunter-join-backend.onrender.com/join", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name?.trim(),
                    email: data.email?.trim(),
                    skills: data.skills?.trim(),
                    profile: data.profile?.trim()
                })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to submit application");
                }
                return response.json();
            })
            .then(() => {
                // Hide form
                form.style.display = 'none';
            
                // Show success message
                successMessage.classList.remove('hidden');
            })
            .catch(error => {
                console.error("Join request error:", error);
                alert("Something went wrong. Please try again later.");
            });

        });
    }
}

// ==========================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ==========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all major sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ==========================================
// EASTER EGG - KONAMI CODE
// ==========================================
function initEasterEgg() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateEasterEgg() {
    // Create hacker message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 255, 136, 0.95);
        color: #0b0f14;
        padding: 2rem 3rem;
        border-radius: 1rem;
        font-family: 'Orbitron', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        z-index: 10001;
        box-shadow: 0 0 60px rgba(0, 255, 136, 0.8);
        text-align: center;
    `;
    message.innerHTML = `
        <div>🎯 ELITE OPERATOR DETECTED</div>
        <div style="font-size: 1rem; margin-top: 1rem; font-weight: 400;">
            You've unlocked the secret. Welcome, hacker.
        </div>
    `;
    document.body.appendChild(message);

    setTimeout(() => {
        message.style.transition = 'opacity 0.5s ease';
        message.style.opacity = '0';
        setTimeout(() => message.remove(), 500);
    }, 3000);

    // Enhance particle effects temporarily
    config.particles.opacity = 0.8;
    config.particles.connectionDistance = 200;
    setTimeout(() => {
        config.particles.opacity = 0.3;
        config.particles.connectionDistance = 120;
    }, 5000);
}

// ==========================================
// INITIALIZE ALL SYSTEMS
// ==========================================
let particleNetwork;
let matrixRain;
let antiGravity;

function init() {
    console.log('%c🎯 TEAM HUNTER SYSTEMS ONLINE', 'color: #00ff88; font-size: 20px; font-weight: bold;');
    console.log('%c⚡ Anti-Gravity Physics: ACTIVE', 'color: #00d4ff; font-size: 14px;');
    console.log('%c🔐 Cyber Defense: ENGAGED', 'color: #a855f7; font-size: 14px;');

    // Terminal intro
    initTerminalIntro();

    // Cursor glow
    initCursorGlow();

    // Particle network
    const particleCanvas = document.getElementById('particle-canvas');
    if (particleCanvas) {
        particleNetwork = new ParticleNetwork(particleCanvas);
        particleNetwork.animate();
    }

    // Matrix rain
    const matrixCanvas = document.getElementById('matrix-canvas');
    if (matrixCanvas) {
        matrixRain = new MatrixRain(matrixCanvas);
        matrixRain.animate();
    }

    // Anti-gravity engine (wait for intro to finish)
    setTimeout(() => {
        antiGravity = new AntiGravityEngine();
    }, 3500);

    // Other initializations
    initSmoothScroll();
    initMobileMenu();
    initFormHandling();
    animateCounters();
    initScrollAnimations();
    initEasterEgg();

    // Scroll handler
    window.addEventListener('scroll', handleScroll);

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    // Refresh anti-gravity on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (antiGravity) {
                antiGravity.refresh();
            }
        }, 250);
    });
}

// Start when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==========================================
// PERFORMANCE MONITORING
// ==========================================
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`%c⚡ Page loaded in ${pageLoadTime}ms`, 'color: #00ff88; font-weight: bold;');
    }
});

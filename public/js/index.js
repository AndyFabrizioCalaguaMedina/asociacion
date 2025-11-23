app.use(express.static('public'));
        // ===================== LOCOMOTIVE SCROLL =====================
const scrollContainer = document.querySelector('[data-scroll-container]');

const locoScroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  lerp: 0.08,
  getDirection: true
});

// Vincular Locomotive Scroll con ScrollTrigger
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(scrollContainer, {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: scrollContainer.style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// ===================== HERO ANIMATION =====================
gsap.from(".hero-content h1", {
  y: 50, opacity: 0, duration: 1.5, ease: "power3.out", delay: 0.3
});
gsap.from(".hero-content p", {
  y: 30, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.6
});
gsap.from(".hero-content .btn", {
  scale: 0, opacity: 0, duration: 1, ease: "back.out(1.7)", delay: 0.9
});

// ===================== CURSOS ANIMACIÓN =====================
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".grid",
    scroller: scrollContainer,
    start: "top 90%",
  },
  y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
});

// Hover animado en tarjetas
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => gsap.to(card, { scale: 1.05, duration: 0.3 }));
  card.addEventListener("mouseleave", () => gsap.to(card, { scale: 1, duration: 0.3 }));
});

// ===================== MOTIVACIONAL =====================
gsap.from(".motivacion img", {
  scrollTrigger: { trigger: ".motivacion", scroller: scrollContainer, start: "top 80%" },
  x: -100, opacity: 0, duration: 1, stagger: 0.2
});
gsap.from(".texto-motivacional", {
  scrollTrigger: { trigger: ".motivacion", scroller: scrollContainer, start: "top 80%" },
  y: 50, opacity: 0, duration: 1
});

// ===================== TESTIMONIOS =====================
gsap.from(".testimonio", {
  scrollTrigger: {
    trigger: ".testimonios-grid",
    scroller: scrollContainer,
    start: "top 90%"
  },
  y: 50, opacity: 0, duration: 1, stagger: 0.3
});

// ===================== FORMULARIO =====================
gsap.from(".formulario input, .formulario select, .formulario button", {
  scrollTrigger: {
    trigger: ".reserva",
    scroller: scrollContainer,
    start: "top 90%"
  },
  y: 30, opacity: 0, duration: 1, stagger: 0.2
});

// Inicialización mejorada del carrusel
        document.addEventListener('DOMContentLoaded', function () {
            const carousel = document.getElementById('heroCarousel');

            if (carousel) {
                // Ocultar temporalmente el carrusel durante la inicialización
                carousel.style.opacity = '0';

                // Inicializar carrusel de Bootstrap
                const bsCarousel = new bootstrap.Carousel(carousel, {
                    interval: 3000,
                    wrap: true,
                    touch: true
                });

                // Mostrar el carrusel después de la inicialización
                setTimeout(() => {
                    carousel.style.opacity = '1';
                    carousel.style.transition = 'opacity 0.3s ease';
                }, 100);

                console.log('Carrusel inicializado correctamente');
            }
        });
        // AOS Animations
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-out-cubic',
            offset: 100
        });

        // Scroll header effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('.navbar');
            nav.classList.toggle('scrolled', window.scrollY > 50);
        });

        // JavaScript para el funcionamiento del menú móvil
        document.addEventListener('DOMContentLoaded', function () {
            const logoIcon = document.querySelector('.logo i');
            const logoText = document.querySelector('.logo');
            const navMenu = document.getElementById('navMenu');
            const menuOverlay = document.createElement('div');
            menuOverlay.className = 'menu-overlay';
            document.body.appendChild(menuOverlay);

            let isMenuOpen = false;

            // Función para abrir/cerrar el menú
            function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                navMenu.classList.toggle('active');
                menuOverlay.classList.toggle('active');
                document.body.classList.toggle('menu-open');

                // Animación del icono
                if (isMenuOpen) {
                    logoIcon.style.transform = 'rotate(90deg)';
                    logoIcon.style.color = 'var(--celeste-suave)';
                } else {
                    logoIcon.style.transform = 'rotate(0deg)';
                    logoIcon.style.color = 'var(--celeste)';
                }
            }

            // Evento para el icono de tijeras (hamburguesa) - SOLO en móvil
            function handleIconClick(e) {
                // Verificar si estamos en modo móvil (ancho <= 992px)
                if (window.innerWidth <= 992) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleMenu();
                }
            }

            // Evento para el texto del logo - SIEMPRE redirige al index
            function handleLogoClick(e) {
                // Si estamos en móvil y el clic fue en el icono, no hacer nada
                if (window.innerWidth <= 992 && e.target.tagName === 'I') {
                    return;
                }
                // Redirigir al index
                window.location.href = '/';
            }

            // Agregar event listeners
            logoIcon.addEventListener('click', handleIconClick);
            logoText.addEventListener('click', handleLogoClick);

            // Cerrar menú al hacer clic en el overlay
            menuOverlay.addEventListener('click', function () {
                if (window.innerWidth <= 992 && isMenuOpen) {
                    toggleMenu();
                }
            });

            // Cerrar menú al hacer clic en un enlace (solo en móvil)
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function () {
                    if (window.innerWidth <= 992 && isMenuOpen) {
                        toggleMenu();
                    }
                });
            });

            // Cerrar menú con la tecla ESC (solo en móvil)
            document.addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && window.innerWidth <= 992 && isMenuOpen) {
                    toggleMenu();
                }
            });

            // Cerrar menú al redimensionar la ventana a desktop
            window.addEventListener('resize', function () {
                if (window.innerWidth > 992 && isMenuOpen) {
                    toggleMenu();
                }
            });

            // Restaurar estado del icono al cargar la página
            logoIcon.style.transform = 'rotate(0deg)';
            logoIcon.style.color = 'var(--celeste)';
        });
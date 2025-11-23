// Inicializar animaciones AOS
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  // Navbar transparente → fondo oscuro al hacer scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


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

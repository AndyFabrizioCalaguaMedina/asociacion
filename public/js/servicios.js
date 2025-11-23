// ===================== LIGHTBOX GALERÍA =====================
document.addEventListener("DOMContentLoaded", () => {
  const galeriaItems = document.querySelectorAll(".galeria-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const cerrar = document.querySelector(".cerrar");

  // Abrir lightbox al hacer clic en cualquier imagen de la galería
  galeriaItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
        lightbox.classList.add("activo");
      }
    });
  });

  // Cerrar al hacer clic en el botón de cierre
  cerrar.addEventListener("click", () => {
    lightbox.classList.remove("activo");
    setTimeout(() => (lightbox.style.display = "none"), 300);
  });

  // Cerrar al hacer clic fuera de la imagen
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("activo");
      setTimeout(() => (lightbox.style.display = "none"), 300);
    }
  });
});
// ===================== ANIMACIÓN FRASE CURSOS =====================
document.addEventListener("DOMContentLoaded", () => {
  // Efecto principal: entrada con fade + desplazamiento + zoom leve
  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      ".intro-frase",
      { opacity: 0, y: 60, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1.8, ease: "power3.out", delay: 0.3 }
    );

    // 🔹 Efecto parallax suave del fondo al hacer scroll
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const intro = document.querySelector(".cursos-intro");
      if (intro) {
        intro.style.backgroundPositionY = `${scroll * 0.3}px`;
      }
    });
  } else {
    console.warn("GSAP no está cargado. Asegúrate de incluirlo antes de este script.");
  }
});

// ===================== MENÚ NAVEGACIÓN RESPONSIVE =====================
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

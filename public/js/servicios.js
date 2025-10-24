// ===================== GSAP + ScrollTrigger =====================
gsap.registerPlugin(ScrollTrigger);

// Scroll suave en toda la página
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===================== ANIMACIONES AL CARGAR =====================
gsap.from(".hero-title", {
  opacity: 0,
  y: 80,
  duration: 1.5,
  ease: "power4.out",
});

gsap.from(".hero-sub", {
  opacity: 0,
  y: 60,
  duration: 1.3,
  delay: 0.3,
  ease: "power3.out",
});

gsap.from(".hero-btn", {
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  delay: 0.6,
  ease: "elastic.out(1, 0.5)",
});

// ===================== EFECTO DE SCROLL Y ENTRADA =====================
gsap.utils.toArray("[data-anim]").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out"
  });
});


// ===================== PARALLAX EN MOTIVACIÓN =====================
// Efecto parallax y brillo para la imagen de motivación
const fondoMotivacion = document.querySelector(".fondo-motivacion");
let angle = 0;

function animarMotivacion() {
  const scrollPos = window.scrollY;

  // Movimiento parallax con scroll
  const moveX = Math.sin(scrollPos * 0.002) * 20;
  const moveY = scrollPos * 0.1;

  // Movimiento flotante suave continuo
  const floatX = Math.sin(angle) * 10; // horizontal
  const floatY = Math.cos(angle) * 5;  // vertical
  angle += 0.02;

  fondoMotivacion.style.transform = `translate(calc(-50% + ${moveX + floatX}px), calc(-50% + ${moveY + floatY}px))`;

  // Brillo dinámico
  const brightness = 1.2 + (scrollPos * 0.0005);
  const saturate = 1.3 + (scrollPos * 0.0005);
  fondoMotivacion.style.filter = `brightness(${brightness}) saturate(${saturate})`;

  requestAnimationFrame(animarMotivacion);
}

// Iniciar animación
animarMotivacion();

// ===================== BOTONES ANIMADOS =====================
document.querySelectorAll("button, .btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.1,
      backgroundColor: "#87CEEB",
      color: "#000",
      duration: 0.3,
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      backgroundColor: "transparent",
      color: "#87CEEB",
      duration: 0.3,
    });
  });
});

// ===================== FILTRO DE CURSOS =====================
const filtroBtns = document.querySelectorAll(".filtro-btn");
const cursos = document.querySelectorAll(".curso");

filtroBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filtroBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const categoria = btn.dataset.categoria;

    cursos.forEach((curso) => {
      if (categoria === "todos" || curso.dataset.categoria === categoria) {
        curso.style.display = "block";
        gsap.fromTo(
          curso,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
        );
      } else {
        gsap.to(curso, { opacity: 0, y: 30, duration: 0.3 });
        setTimeout(() => (curso.style.display = "none"), 300);
      }
    });
  });
});

// ===================== ANIMACIÓN DE NAVBAR LINKS =====================
gsap.from(".nav-links li", {
  opacity: 0,
  y: -20,
  duration: 1,
  stagger: 0.1,
  ease: "power3.out",
});

// ===================== ANIMACIÓN DE TÍTULOS DE SECCIONES =====================
gsap.utils.toArray(".section-title").forEach((title) => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 90%",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
  });
});
// ✨ Animación de aparición para las tarjetas de servicios
const servicios = document.querySelectorAll('.servicio');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

servicios.forEach(serv => {
  serv.style.opacity = 0;
  serv.style.transform = 'translateY(40px)';
  serv.style.transition = 'all 0.8s ease';
  observer.observe(serv);
});

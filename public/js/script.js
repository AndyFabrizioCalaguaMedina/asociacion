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

// ===================== GALERÍA HD CON ANIMACIONES =====================
// Seleccionar el contenedor de Locomotive


// Animación fade + slide de cada imagen
gsap.utils.toArray(".gallery-item").forEach(item => {
  gsap.fromTo(item,
    { y: 50, opacity: 0 },
    { 
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        scroller: scrollContainer,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  );

  // Hover dinámico con zoom y sombra azul
  item.addEventListener("mouseenter", () => {
    gsap.to(item, { scale: 1.05, duration: 0.3, boxShadow: "0 15px 40px rgba(135,206,235,0.6)" });
  });
  item.addEventListener("mouseleave", () => {
    gsap.to(item, { scale: 1, duration: 0.3, boxShadow: "0 5px 20px rgba(0,0,0,0.4)" });
  });
});


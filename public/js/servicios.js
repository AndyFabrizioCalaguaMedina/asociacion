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

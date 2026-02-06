document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const message = document.getElementById("message");

  let lluviaActiva = false;

  /* ===== BOTÓN NO HUYE ===== */
  function moverNo() {
    const margin = 20;
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }

  noBtn.addEventListener("mouseenter", moverNo);
  noBtn.addEventListener("mousedown", moverNo);
  noBtn.addEventListener("touchstart", moverNo);

  /* ===== CREAR FLOR ===== */
  function crearFlor() {
    const flor = document.createElement("div");
    flor.textContent = "🌸";
    flor.style.position = "fixed";
    flor.style.left = Math.random() * 100 + "vw";
    flor.style.top = "-50px";
    flor.style.fontSize = 30 + Math.random() * 40 + "px";
    flor.style.opacity = Math.random();
    flor.style.pointerEvents = "none";
    flor.style.zIndex = 999;

    document.body.appendChild(flor);

    let posY = -50;
    const velocidad = 1 + Math.random() * 2;

    function caer() {
      posY += velocidad;
      flor.style.top = posY + "px";

      if (posY < window.innerHeight + 50) {
        requestAnimationFrame(caer);
      }
    }

    caer();
  }

  /* ===== BOTÓN SÍ ===== */
  yesBtn.addEventListener("click", () => {
    message.textContent =
      "Love uuuuuu, busca en tu librero, hay una sorpresa jiji";
    message.classList.remove("hidden");

    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // activar lluvia infinita
    if (!lluviaActiva) {
      lluviaActiva = true;
      setInterval(crearFlor, 300);
    }
  });
});

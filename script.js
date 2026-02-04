document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("no");
  const yesBtn = document.getElementById("yes");
  const message = document.getElementById("message");

  function moverBoton() {
    const margin = 20;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - margin;
    const maxY = window.innerHeight - btnHeight - margin;

    let x, y;

    do {
      x = Math.random() * maxX;
      y = Math.random() * maxY;
    } while (
      Math.abs(x - noBtn.offsetLeft) < 80 &&
      Math.abs(y - noBtn.offsetTop) < 60
    );

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  }

  // El botón NO huye en todas direcciones
  noBtn.addEventListener("mouseenter", moverBoton);
  noBtn.addEventListener("touchstart", moverBoton);
  noBtn.addEventListener("mousedown", moverBoton);

  // El botón SÍ es fiel
  yesBtn.addEventListener("click", () => {
    message.textContent =
      "Sabía que dirías que sí 😚💖 Te amo amorcito.";
    message.classList.remove("hidden");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });
});
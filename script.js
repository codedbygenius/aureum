const hero = document.querySelector(".hero");

if (hero && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let frame = 0;

  const updatePointer = (event) => {
    if (frame) return;

    frame = window.requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      hero.style.setProperty("--hero-x", `${x.toFixed(2)}%`);
      hero.style.setProperty("--hero-y", `${y.toFixed(2)}%`);
      frame = 0;
    });
  };

  hero.addEventListener("pointermove", updatePointer, { passive: true });
}

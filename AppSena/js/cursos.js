// ── FILTROS ────────────────────────────────────
const filtros = document.querySelectorAll('.filtro-btn');

filtros.forEach(btn => {
  btn.addEventListener('click', function () {
    filtros.forEach(b => b.classList.remove('activo'));
    this.classList.add('activo');
  });
});
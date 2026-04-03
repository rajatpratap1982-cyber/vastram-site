/* ============================================================
   VASTRAM — Shared JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Wishlist toggle ─────────────────────────────────────── */
  document.querySelectorAll('.product-card__wish').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      btn.textContent = btn.classList.contains('active') ? '♥' : '♡';
    });
  });

  /* ── Promo bar close ─────────────────────────────────────── */
  const promoClose = document.getElementById('promo-close');
  if (promoClose) {
    promoClose.addEventListener('click', () => {
      document.querySelector('.promo-bar').style.display = 'none';
    });
  }

  /* ── Newsletter form ─────────────────────────────────────── */
  const nlForm = document.getElementById('nl-form');
  if (nlForm) {
    nlForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = nlForm.querySelector('input');
      if (input.value) {
        nlForm.innerHTML = '<p style="color:var(--teal);font-weight:500;font-size:14px;">✓ You\'re subscribed! Watch your inbox for new arrivals.</p>';
      }
    });
  }

  /* ── Add to cart feedback ────────────────────────────────── */
  document.querySelectorAll('.product-card__add').forEach(btn => {
    btn.addEventListener('click', function () {
      const orig = this.textContent;
      this.textContent = '✓ Added';
      this.style.background = 'var(--green-bg)';
      this.style.color = 'var(--green-text)';
      this.style.borderColor = '#a8d080';
      const badge = document.querySelector('.nav-icon .badge');
      if (badge) badge.textContent = parseInt(badge.textContent || 0) + 1;
      setTimeout(() => {
        this.textContent = orig;
        this.style.background = '';
        this.style.color = '';
        this.style.borderColor = '';
      }, 1500);
    });
  });

});

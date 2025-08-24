document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('site-nav');
  const toggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  const year = document.getElementById('year');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    navList?.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll for in-page links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Basic contact form UX (client-side only)
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  function setError(fieldId, message) {
    const el = document.querySelector(`.field-error[data-for="${fieldId}"]`);
    if (el) el.textContent = message || '';
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let valid = true;
    if (!name.value.trim()) { setError('name', 'Please enter your name'); valid = false; } else setError('name');
    if (!validateEmail(email.value)) { setError('email', 'Please enter a valid email'); valid = false; } else setError('email');
    if (!message.value.trim()) { setError('message', 'Please tell me a bit about your project'); valid = false; } else setError('message');

    if (!valid) {
      status.textContent = 'Please fix the errors and try again.';
      return;
    }

    // Simulate submission for static site
    status.textContent = 'Thanks! Your message has been noted. I will reply soon.';
    form.reset();
  });
});
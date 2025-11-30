// main.js — nav toggle, basic form handling and small niceties
document.addEventListener('DOMContentLoaded', function(){
  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    navToggle.classList.toggle('open');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
        // close nav on mobile
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          navToggle.classList.remove('open');
        }
      }
    });
  });

  // Basic client-side form validation + fake submission
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      formMsg.textContent = 'Iltimos barcha maydonlarni to‘ldiring.';
      formMsg.style.color = '#ffbaba';
      return;
    }

    // rudimentary email check
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      formMsg.textContent = 'Iltimos haqiqiy email kiriting.';
      formMsg.style.color = '#ffbaba';
      return;
    }

    // fake submit (since server yo'q)
    formMsg.textContent = 'Xabar yuborildi — tez orada aloqaga chiqamiz!';
    formMsg.style.color = '#9ee7c2';
    form.reset();

    // If you have a backend: send fetch('/api/contact', {...})
  });
});

// Inicializa tsParticles para fundo interativo
document.addEventListener('DOMContentLoaded', async () => {
  if (window.tsParticles) {
    tsParticles.load('particles', {
      fpsLimit: 60,
      background: { color: { value: 'transparent' } },
      particles: {
        number: { value: 60, density: { enable: true, area: 900 } },
        color: { value: ['#10b981', '#60a5fa', '#2dd4bf'] },
        shape: { type: 'circle' },
        opacity: { value: 0.18, animation: { enable: true, speed: 0.6, minimumValue: 0.06 } },
        size: { value: { min: 1, max: 5 }, animation: { enable: true, speed: 2, minimumValue: 0.6 } },
        move: { enable: true, speed: 0.6, random: true, straight: false, outModes: { default: 'out' }, attract: { enable: false } },
        links: { enable: true, distance: 140, color: '#08333a', opacity: 0.07, width: 1 }
      },
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' }
        },
        modes: { grab: { distance: 160, links: { opacity: 0.12 } }, push: { quantity: 3 } }
      },
      detectRetina: true
    });
  }

  // Form handling (simples, funcional sem backend)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
      alert('Preencha todos os campos.');
      return;
    }

    // Simula envio
    const btn = form.querySelector('button[type=submit]');
    const original = btn.innerHTML;
    btn.innerHTML = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      btn.innerHTML = original;
      btn.disabled = false;
      form.reset();
      // Mostrar um pequeno toast
      showToast('Mensagem enviada! Responderei em breve.');
    }, 900);
  });

  // Micro interactions: tilt on project cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width/2;
      const y = e.clientY - rect.top - rect.height/2;
      card.style.transform = `perspective(600px) rotateX(${(-y/30)}deg) rotateY(${(x/30)}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('menuBtn');
  menuBtn && menuBtn.addEventListener('click', () => {
    let nav = document.querySelector('nav');
    if (!nav) return;
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('hidden');
  });

  // Smooth scroll for internal links and close mobile menu after click
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const yOffset = -20; // pequeno offset
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        // fechar menu mobile se aberto
        const nav = document.querySelector('nav');
        if (nav && !nav.classList.contains('hidden') && menuBtn) {
          nav.classList.add('hidden');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // Skill icon micro animation (pulse)
  const skills = document.querySelectorAll('.skill-icon');
  skills.forEach((s,i) => {
    s.style.transition = 'transform 420ms ease, box-shadow 420ms ease';
    s.addEventListener('mouseenter', () => { s.style.transform = 'scale(1.12)'; s.style.boxShadow = '0 12px 30px rgba(52,211,153,0.06)'; });
    s.addEventListener('mouseleave', () => { s.style.transform = ''; s.style.boxShadow = ''; });
  });

  // Toast utility
  function showToast(msg){
    let t = document.createElement('div');
    t.className = 'fixed bottom-8 right-8 bg-[#011518] text-green-300 px-4 py-3 rounded shadow-lg';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(()=>{ t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; }, 2200);
    setTimeout(()=> t.remove(), 2600);
  }

  // Ripple effect for primary buttons
  function addRipple(btn, e){
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    const size = Math.max(rect.width, rect.height) * 0.9;
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
    btn.appendChild(ripple);
    setTimeout(()=> ripple.remove(), 700);
  }

  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => { addRipple(btn, e); });
    btn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') addRipple(btn, e); });
  });
});

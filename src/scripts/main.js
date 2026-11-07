/**
 * Main Client Script - Plafon PVC Solo by Griya Alfath
 * Vanilla JavaScript interactions for Astro SSG
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordion();
  initBackToTop();
  initProductFilter();
  initLightbox();
  initContactForm();
});

// 1. Mobile Menu Toggle
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (!mobileToggle || !navMenu) return;

  mobileToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    mobileToggle.classList.toggle('active', isOpen);
    mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close when clicking a nav link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// 2. FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherHeader = otherItem.querySelector('.faq-header');
        if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// 3. Back to Top Button
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// 4. Product Filter Simulation
function initProductFilter() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const productCards = document.querySelectorAll('[data-category]');

  if (!filterButtons.length || !productCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active filter button
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// 5. Lightbox for Gallery / Projects
function initLightbox() {
  const triggers = document.querySelectorAll('[data-lightbox]');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (!triggers.length || !lightbox || !lightboxImg) return;

  triggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const src = trigger.getAttribute('href') || trigger.getAttribute('data-src');
      const caption = trigger.getAttribute('data-caption') || '';

      lightboxImg.src = src;
      if (lightboxCaption) lightboxCaption.textContent = caption;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

// 6. Contact Form Simulation
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('[name="name"]')?.value.trim();
    const phone = contactForm.querySelector('[name="phone"]')?.value.trim();
    const service = contactForm.querySelector('[name="service"]')?.value;
    const message = contactForm.querySelector('[name="message"]')?.value.trim();

    if (!name || !phone) {
      if (formStatus) {
        formStatus.textContent = 'Harap lengkapi nama dan nomor WhatsApp Anda.';
        formStatus.className = 'form-status error';
      }
      return;
    }

    // Direct WhatsApp redirect
    const waText = encodeURIComponent(
      `Halo Mas Otello (Griya Alfath),\nSaya mengajukan simulasi konsultasi melalui website:\n• Nama: ${name}\n• No. WhatsApp: ${phone}\n• Kategori Kebutuhan: ${service || 'Konsultasi Plafon'}\n• Catatan: ${message || '-'}\n\nMohon info estimasi biaya dan jadwal survei lokasi. Terima kasih!`
    );
    const waUrl = `https://wa.me/6282157249454?text=${waText}`;

    if (formStatus) {
      formStatus.textContent = 'Mengarahkan ke WhatsApp resmi Griya Alfath...';
      formStatus.className = 'form-status success';
    }

    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 600);
  });
}


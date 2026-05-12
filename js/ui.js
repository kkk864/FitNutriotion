/**
 * Стильные фишки: полоска акции, кнопка «Наверх», появление блоков при скролле
 */
(function () {
  'use strict';

  // Закрытие верхней полоски с акцией (запоминаем в localStorage)
  var announcementBar = document.getElementById('announcement-bar');
  var announcementClose = document.getElementById('announcement-close');
  var ANNOUNCEMENT_KEY = 'fitnutrition_announcement_closed';

  if (announcementBar && announcementClose) {
    if (localStorage.getItem(ANNOUNCEMENT_KEY) === '1') {
      announcementBar.style.display = 'none';
    }
    announcementClose.addEventListener('click', function () {
      announcementBar.style.display = 'none';
      try { localStorage.setItem(ANNOUNCEMENT_KEY, '1'); } catch (e) {}
    });
  }

  // Кнопка «Наверх»
  var backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.setAttribute('aria-label', 'Наверх');
  backToTop.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>';
  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(backToTop);

  function toggleBackToTop() {
    if (window.scrollY > 400) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
  window.addEventListener('scroll', toggleBackToTop, { passive: true });
  toggleBackToTop();

  // Появление блоков при скролле (reveal)
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.05 });

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add('revealed');
    });
  }
})();

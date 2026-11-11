/* Shared behavior for every page.
   Scroll reveal: elements with the "reveal" class fade in as they enter the
   screen. The matching CSS is in css/base.css. Page transitions are handled
   in CSS, so nothing is needed for them here. */

(function () {
  'use strict';

  var items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Show everything right away when motion is turned off or the browser is old.
  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(function (item) {
      item.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );

  items.forEach(function (item) {
    observer.observe(item);
  });
})();

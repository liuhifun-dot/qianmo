/* Qianmo Lighting — static site interactions */
(function () {
  'use strict';

  var navToggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();

      var data = new FormData(contactForm);
      var subject = 'Project inquiry from qianmolighting.com';
      var body = [
        'Name: ' + (data.get('name') || ''),
        'Email: ' + (data.get('email') || ''),
        'Company: ' + (data.get('company') || ''),
        'Country / Region: ' + (data.get('country') || ''),
        'Project Type: ' + (data.get('type') || ''),
        '',
        'Message:',
        data.get('message') || ''
      ].join('\n');

      window.location.href = 'mailto:sales@qianmolighting.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }
})();

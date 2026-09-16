(() => {
  'use strict';
  const id = window.PORTFOLIO_CONFIG?.gaMeasurementId || '';
  const analyticsEnabled = /^G-[A-Z0-9]+$/.test(id) && location.protocol === 'https:';
  if (analyticsEnabled) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', id, { allow_google_signals: false, allow_ad_personalization_signals: false });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
    document.head.append(tag);
  }
  const track = (event, parameters = {}) => {
    if (analyticsEnabled && typeof window.gtag === 'function') window.gtag('event', event, parameters);
  };
  document.querySelectorAll('[data-event]').forEach(link => {
    link.addEventListener('click', () => track(link.dataset.event, { link_location: link.closest('section')?.id || 'footer' }));
  });
  document.querySelectorAll('[data-project]').forEach(link => {
    link.addEventListener('click', () => track('project_click', { project_name: link.dataset.project }));
  });
  const status = document.getElementById('copy-status');
  document.querySelectorAll('.copy-email').forEach(button => {
    button.addEventListener('click', async () => {
      const email = button.dataset.email;
      let copied = false;
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
          copied = true;
        }
      } catch (_) { /* Try local-preview fallback. */ }
      if (!copied) {
        const field = document.createElement('textarea');
        field.value = email;
        field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;left:-9999px;top:0';
        document.body.append(field);
        field.select();
        try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
        field.remove();
        button.focus({ preventScroll: true });
      }
      status.textContent = copied ? 'Email address copied.' : 'Copy unavailable. Please select and copy the email address above.';
      if (copied) {
        button.textContent = 'Copied';
        track('email_copy', { contact_type: email.endsWith('@umass.edu') ? 'academic' : 'personal' });
        window.setTimeout(() => { button.textContent = 'Copy'; }, 2000);
      }
    });
  });
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let pending = false;
  function updateActive() {
    const offset = document.querySelector('.header').getBoundingClientRect().height + 45;
    let active = 0;
    sections.forEach((section, index) => { if (section && section.getBoundingClientRect().top <= offset) active = index; });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 5) active = links.length - 1;
    links.forEach((link, index) => {
      if (index === active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    pending = false;
  }
  function requestUpdate() {
    if (!pending) { pending = true; window.requestAnimationFrame(updateActive); }
  }
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  window.addEventListener('load', requestUpdate);
  updateActive();
})();

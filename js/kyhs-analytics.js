(function () {
  // ===== Cloudflare Web Analytics =====
  // Shared token (same as the other two KYHS sites, per requirement).
  var CF_TOKEN = '13159866f1e04afe8edfc805a9be5c8e';
  if (CF_TOKEN) {
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_TOKEN }));
    document.head.appendChild(s);
  }

  // ===== Google Tag Manager (magnets.kyhsexport.com) =====
  // Fill with this site's own container ID when available; empty = skipped.
  var GTM_ID = '';
  if (GTM_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    var g = document.createElement('script');
    g.async = true;
    g.src = 'https://www.googletagmanager.com/gtm.js?id=' + GTM_ID;
    document.head.appendChild(g);
  }

  // ===== Google Analytics 4 (direct, magnets.kyhsexport.com) =====
  // Fill with this site's own measurement ID; empty = skipped.
  var GA4_ID = '';
  if (GA4_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
    var ga = document.createElement('script');
    ga.async = true;
    ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
    document.head.appendChild(ga);
  }
})();

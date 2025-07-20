(function(){
  // Load the GA script
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-3QGREMZZK6';
  document.head.appendChild(s);

  // Setup gtag after loading
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', 'G-3QGREMZZK6');
})();
// Перемикач мови: показує блоки [data-lang="<code>"], памʼятає вибір.
(function () {
  var SUPPORTED = ['uk', 'ru', 'en'];
  function detect() {
    var saved = localStorage.getItem('md_lang');
    if (saved && SUPPORTED.indexOf(saved) >= 0) return saved;
    var n = (navigator.language || 'uk').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(n) >= 0 ? n : 'uk';
  }
  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('show', el.getAttribute('data-lang') === lang);
    });
    document.querySelectorAll('.langs button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-set') === lang);
    });
    localStorage.setItem('md_lang', lang);
  }
  window.setLang = function (l) { apply(l); };
  document.addEventListener('DOMContentLoaded', function () { apply(detect()); });
})();

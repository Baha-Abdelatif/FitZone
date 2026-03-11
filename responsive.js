document.addEventListener('DOMContentLoaded', function () {
  var headerInner = document.querySelector('.header-inner');
  var nav = document.querySelector('.nav');

  if (headerInner && nav) {
    // Créer le bouton hamburger
    var toggle = document.createElement('button');
    toggle.className = 'nav-toggle';
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    headerInner.appendChild(toggle);

    function openMenu() {
      nav.classList.add('nav-open');
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      nav.classList.remove('nav-open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      nav.classList.contains('nav-open') ? closeMenu() : openMenu();
    });

    // Fermer au clic sur un lien
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Fermer avec Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  // Rendre les tableaux de planning scrollables horizontalement
  document.querySelectorAll('.planning-table').forEach(function (table) {
    if (!table.parentElement.classList.contains('planning-wrap')) {
      var wrap = document.createElement('div');
      wrap.className = 'planning-wrap';
      table.parentNode.insertBefore(wrap, table);
      wrap.appendChild(table);
    }
  });
});

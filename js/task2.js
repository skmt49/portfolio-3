(function() {
  'use strict';
  const menu = document.getElementById('menu');
  const menuClose = document.getElementById('menu-close');
  //ハンバーガーメニュー
  menu.addEventListener('click', function() {
      document.body.className = 'menu-open';
  });
  menuClose.addEventListener('click', function() {
      document.body.className = '';
  });
})();

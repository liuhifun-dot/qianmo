(function(){
  const btn=document.querySelector('[data-nav-toggle]');
  const nav=document.querySelector('[data-nav]');
  if(btn&&nav){
    btn.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      btn.setAttribute('aria-expanded',open?'true':'false');
    });
  }
  document.querySelectorAll('[data-mail]').forEach(el=>{
    el.addEventListener('click',()=>{
      window.location.href='mailto:hello@qianmolighting.com?subject=Project inquiry for Qianmu';
    });
  });
})();

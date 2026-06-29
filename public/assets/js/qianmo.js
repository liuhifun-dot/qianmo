
(function(){
  const header=document.querySelector('[data-header]');
  const set=()=>{ if(header){ header.classList.toggle('is-scrolled', window.scrollY>20); } };
  set(); window.addEventListener('scroll', set, {passive:true});
  const btn=document.querySelector('[data-menu-button]'); const menu=document.querySelector('[data-menu]');
  if(btn&&menu){ btn.addEventListener('click',()=>{ const open=menu.classList.toggle('open'); btn.setAttribute('aria-expanded',open?'true':'false'); }); }
  const path=window.location.pathname;
  document.querySelectorAll('.qm-nav a').forEach(a=>{ if(a.getAttribute('href')===path || (path!=='/' && a.getAttribute('href')!=='/' && path.startsWith(a.getAttribute('href')))) a.classList.add('is-active'); });
})();

/* ========================================
   千墨 QianMo — 品牌设计与数字创意
   主脚本
   ======================================== */

(function () {
  'use strict';

  /* ---- 移动端导航 ---- */
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');

  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      navList.classList.toggle('open');
    });

    // 点击导航链接后关闭菜单
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navList.classList.remove('open');
      });
    });
  }

  /* ---- 联系表单 ---- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = '发送中...';
      btn.disabled = true;

      // 模拟提交（实际使用时可替换为 API 调用）
      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
        showToast('消息已发送，我们会尽快回复！');
        contactForm.reset();
      }, 1200);
    });
  }

  /* ---- 渲染案例项目 ---- */
  var projectsGrid = document.getElementById('projectsGrid');
  if (projectsGrid) {
    var projects = [
      {
        title: '品牌全案 — 某个科技公司',
        tag: '品牌策略 / VIS / 网站',
        color: '#e8f0fe'
      },
      {
        title: '官网改版 — 某制造业集团',
        tag: 'UI设计 / 前端开发',
        color: '#fce8e6'
      },
      {
        title: '品牌视觉升级 — 某消费品',
        tag: 'VIS / 包装设计',
        color: '#e6f4ea'
      },
      {
        title: '小程序设计 — 某本地生活平台',
        tag: 'UI设计 / 交互原型',
        color: '#fff3e0'
      }
    ];

    projects.forEach(function (p) {
      var card = document.createElement('article');
      card.className = 'project-card';
      card.innerHTML =
        '<div class="project-img" style="background:' + p.color + '">' + p.title + '</div>' +
        '<div class="project-info">' +
          '<h3>' + p.title + '</h3>' +
          '<span class="project-tag">' + p.tag + '</span>' +
        '</div>';
      projectsGrid.appendChild(card);
    });
  }

  /* ---- Toast 提示 ---- */
  function showToast(msg) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    document.body.appendChild(toast);

    // 触发动画
    requestAnimationFrame(function () {
      toast.classList.add('show');
    });

    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  /* ---- 平滑滚动 (scroll-behavior fallback) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();

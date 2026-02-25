import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';
import '@awesome.me/webawesome/dist/components/breadcrumb/breadcrumb.js';
import '@awesome.me/webawesome/dist/components/breadcrumb-item/breadcrumb-item.js';

// ─── Site nav hamburger toggle ────────────────────────────────────────────────

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('#site-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const open = nav.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', String(open));
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ─── Manual sidebar toggle ────────────────────────────────────────────────────

const sidebarToggle = document.querySelector('#sidebar-toggle');
const manualLayout = document.querySelector('#manual-layout');
const manualSidebar = document.querySelector('#manual-sidebar');

if (sidebarToggle && manualLayout) {
  sidebarToggle.addEventListener('click', () => {
    const isCollapsed = manualLayout.classList.toggle('sidebar-collapsed');
    sidebarToggle.setAttribute('aria-expanded', String(!isCollapsed));
    if (manualSidebar) {
      manualSidebar.classList.toggle('sidebar-open', !isCollapsed);
    }
  });
}

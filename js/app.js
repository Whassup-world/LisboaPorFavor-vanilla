// Main App - Renders the page
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 LisboaPorFavor App Starting...');
    
    const app = document.getElementById('app');
    if (!app) {
      console.error('❌ App container not found');
      return;
    }
    
    const currentPage = window.currentPage || 'home';
    const heroSection = currentPage === 'guides' ? '' : createHero();
    const mainSection = currentPage === 'guides' ? createGuidesPage() : createMainPage();


    app.innerHTML = `
      ${createNavbar()}
      ${heroSection}
      ${mainSection}
      ${createFooter()}
    `;

    initNavbar();

    if (currentPage !== 'guides') {
      initHero();
      initParallax();
    }
    
    console.log('✅ Page rendered successfully');
    console.log('📊 Data loaded:', {
      tours: typeof toursData !== 'undefined',
      guides: typeof guidesData !== 'undefined'
    });
  });
})();
function applyResponsiveStyles() {
  if (window.innerWidth < 780) {
    const styles = {
      'nav': { justifyContent: 'center' },
      '.nav__links': { gap: '1rem' },
      '.container': { flexDirection: 'column' },
      '.container__left': { minHeight: '700px' },
      '.left__content': { maxWidth: 'none', margin: '6rem 0', textAlign: 'center' },
      '.container__right': { minHeight: '700px' },
      '.container__right img': { position: 'absolute', left: '50%', top: '0', transform: 'translate(-50%, -100%)' },
      '.right__content': { textAlign: 'center', margin: '8rem auto' }
    };
    
    for (let selector in styles) {
      const element = document.querySelector(selector);
      if (element) {
        Object.assign(element.style, styles[selector]);
      }
    }
  }
}
applyResponsiveStyles();
window.addEventListener('resize', applyResponsiveStyles);
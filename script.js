document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidade do menu mobile
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Funcionalidade do sistema de cores dinâmico
  const colorSwitcher = document.getElementById('color-switcher');
  if (colorSwitcher) {
    const buttons = colorSwitcher.querySelectorAll('button');
    const root = document.documentElement;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const primary = button.dataset.colorPrimary;
        const secondary = button.dataset.colorSecondary;
        const accent = button.dataset.colorAccent;

        root.style.setProperty('--color-primary', primary);
        root.style.setProperty('--color-secondary', secondary);
        root.style.setProperty('--color-accent', accent);
      });
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
    // === 1. Funcionalidade do Menu Mobile ===
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Este método alterna a classe 'hidden', fazendo o menu aparecer/desaparecer.
            mobileMenu.classList.toggle('hidden');
        });
    }

    // === 2. Funcionalidade do Sistema de Cores Dinâmico (Seu Código Original) ===
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
    
    // === 3. Funcionalidade do Botão Voltar ao Topo ===
    const backToTopBtn = document.getElementById('back-to-top-btn');

    if (backToTopBtn) {
        // Mostra ou esconde o botão baseado na posição do scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });

        // Rola a página para o topo
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
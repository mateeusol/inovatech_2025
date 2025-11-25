document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica do Menu Mobile (Hamburguer)
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            // Alterna a classe 'hidden' no menu mobile
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 2. Lógica do Botão "Voltar ao Topo" (Back-to-Top)
    // OBS: O botão deve ser adicionado manualmente no HTML do index.html se for necessário.
    const backToTopBtn = document.getElementById('back-to-top-btn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            // Mostra o botão após rolar 100px
            if (window.scrollY > 100) {
                backToTopBtn.classList.remove('hidden');
            } else {
                backToTopBtn.classList.add('hidden');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            // Rola suavemente para o topo
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // 3. Lógica do "Leia Mais..." para impactos.html
    const contentWrapper = document.getElementById('impacto-content-wrapper');
    const readMoreBtn = document.getElementById('read-more-btn');
    const fadeOverlay = document.getElementById('fade-overlay');

    if (contentWrapper && readMoreBtn) {
        readMoreBtn.addEventListener('click', () => {
            // Remove as classes que limitam a altura e criam o fade
            contentWrapper.classList.remove('max-h-96');
            contentWrapper.classList.remove('overflow-hidden');
            
            // Esconde o botão e o overlay de fade
            readMoreBtn.style.display = 'none';
            if (fadeOverlay) {
                fadeOverlay.style.display = 'none';
            }
        });
    }
});
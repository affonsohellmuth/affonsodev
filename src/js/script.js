document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('.theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentTheme);

    themeToggleButton.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
        document.body.classList.remove('light', 'dark');
        document.body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);

        // Alterar o emoji de acordo com o tema
        themeToggleButton.textContent = newTheme === 'light' ? '🌙' : '☀️';
    });
});

// Rolagem suave para seções
const menuLinks = document.querySelectorAll('nav a[href^="#"]');

menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                behavior: 'smooth'
            });

            // Atualiza a URL sem rolar a página
            history.replaceState(null, null, `#${targetId}`);
        }
    });
});

// Ajuste da seção de projetos para estar centralizada
const projetoSection = document.querySelector('#projetos');

function adjustProjetoSection() {
    const windowWidth = window.innerWidth;
    if (windowWidth < 768) { // Largura menor que 768px (dispositivos móveis)
        projetoSection.style.padding = '20px';
    } else {
        projetoSection.style.padding = '42px';
    }
}

adjustProjetoSection();
window.addEventListener('resize', adjustProjetoSection);
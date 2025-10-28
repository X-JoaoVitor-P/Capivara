const themeSwitch = document.getElementById('theme-switch');

// 1. Aplica o estado salvo ao carregar a página
const loadTheme = () => {
    if (localStorage.getItem('darkmode') === 'active') {
        document.body.classList.add('darkmode');
    }
}

// 2. Chama a função de carregamento
loadTheme();

// 3. Adiciona o listener para alternar
themeSwitch.addEventListener('click', () => {
    const isDark = document.body.classList.contains('darkmode');

    if (isDark) {
        // Se está escuro, desliga
        document.body.classList.remove('darkmode');
        localStorage.removeItem('darkmode'); 
    } else {
        // Se está claro, liga
        document.body.classList.add('darkmode');
        localStorage.setItem('darkmode', 'active'); 
    }
});
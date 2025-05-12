//FUNCIOANLIDADE DO MENU HAMBURGUER
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const nav = document.getElementById('nav');

    menu.addEventListener('click', function () {
        // Alterna a visibilidade do menu de navegação
        nav.classList.toggle('active');

        // Animação do botão hamburguer
        menu.classList.toggle('open');

        // Animação das barras
        const bar1 = menu.querySelector('.bar1');
        const bar2 = menu.querySelector('.bar2');
        const bar3 = menu.querySelector('.bar3');

        bar1.classList.toggle('bar1-animate');
        bar2.classList.toggle('bar2-animate');
        bar3.classList.toggle('bar3-animate');
    });
});

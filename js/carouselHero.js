
document.addEventListener('DOMContentLoaded', () => {
    var tlMenu = new TimelineMax({paused: true});

    tlMenu.to('#menuFull', 0.3, {autoAlpha: 1})
    .staggerFromTo('#menuFull ul li', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1}, 0.1);

    var botonAbrirMenu = document.querySelector('.menu_button');
botonAbrirMenu.addEventListener('click', () => {
    tlMenu.play(0);
});

var botonCerrarMenu = document.querySelector('.closeMenu span');
botonCerrarMenu.addEventListener('click', () => {
    tlMenu.reverse(0);
});



 // moverSlider();
function moverSlider(){
    var tl = new TimelineMax({ repeat: 2});

    tl.to('.slide1', 0.5, { opacity: 1})
    .to('.slide1', 0.5, { opacity: 0}, 2)
    .to('.slide2', 0.5, { opacity: 1})
    .to('.slide2', 0.5, { opacity: 0}, 4)
    .to('.slide3', 0.5, { opacity: 1})
    .to('.slide3', 0.5, { opacity: 0}, 6)
    .to('.slide4', 0.5, { opacity: 1})
    .to('.slide4', 0.5, { opacity: 0}, 8)
    .to('.slide5', 0.5, { opacity: 1})
    .to('.slide5', 0.5, { opacity: 0}, 10);

}


})
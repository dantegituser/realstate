document.addEventListener('DOMContentLoaded', () => {
    var tlMenu = new TimelineMax({ paused: true });

    tlMenu.to('#menuFull', 0.3, { autoAlpha: 1 })
        .staggerFromTo('#menuFull ul li', 0.5, { y: 100, opacity: 0 }, { y: 0, opacity: 1 }, 0.1);

    var botonAbrirMenu = document.querySelector('.menu_button');


    botonAbrirMenu.addEventListener('click', () => {
        tlMenu.play(0);
    });


    var botonCerrarMenu = document.querySelector('.closeMenu span');
    botonCerrarMenu.addEventListener('click', () => {
        tlMenu.reverse(0);
    });

    var w = window.innerWidth;
    console.log(w);
    if (w > 678) {
        moverSlider();
    }


    function moverSlider() {
        var tl = new TimelineMax({ repeat: -1 });

        tl.to('.slide1', 0.5, { opacity: 1 })
            .to('.slide1', 0.5, { opacity: 0 }, 3)
            .to('.slide2', 0.5, { opacity: 1 }, 3)
            .to('.slide2', 0.5, { opacity: 0 }, 6)
            .to('.slide3', 0.5, { opacity: 1 }, 6)
            .to('.slide3', 0.5, { opacity: 0 }, 9)
            .to('.slide4', 0.5, { opacity: 1 }, 9)
            .to('.slide4', 0.5, { opacity: 0 }, 12)
            .to('.slide5', 0.5, { opacity: 1 }, 12)
            .to('.slide5', 0.5, { opacity: 0 }, 15);

    }

    // h1 movement

    TweenMax.set('.archtitle', { left: '90%' });
    TweenMax.set('.inttitle', { left: '-10%' });
    var tlh1 = new TimelineMax({ repeat: -1, yoyo: true });
    tlh1.to('.archtitle', 24, { left: '-10%', ease: Linear.easeNone }, 'h1movement')
        .to('.inttitle', 24, { left: '90%', ease: Linear.easeNone }, 'h1movement');
    //TweenMax.fromTo('.archtitle', 24 ,{ left:'110%' }, { left: '-10%',ease:Linear.easeNone, repeat: -1}, 24);

    var linkResidence = document.getElementsByClassName('img-gallery');

    if (linkResidence !== null) {
        linkGal();
    }




    function linkGal() {


        for (let item of linkResidence) {
            item.addEventListener('click', () => {
                window.location = 'residence.html';
            });
        }
    }
});
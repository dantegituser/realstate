document.addEventListener('DOMContentLoaded', () => {

    var liHover = document.querySelectorAll('.list-address li');


    liHover.forEach(element => {

        element.addEventListener('mouseover', () => {
            let liId = element.getAttribute('data-id');

            aparecerImg(liId);
        });
    });

    var w = window.innerWidth;
    //console.log(w)
    if (w < 780) {
        liHover.forEach(element => {

            element.addEventListener('click', () => {
                let liId = element.getAttribute('data-id');
                console.log('mobil');
                aparecerImg(liId);
            });
        });
    }


    function aparecerImg(id) {

        let imagen = document.querySelector('.imagen-arch img');
        imagen.src = `img/list${id}.jpg`;

    }
});
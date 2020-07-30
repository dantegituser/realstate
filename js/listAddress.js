
document.addEventListener('DOMContentLoaded', () => {
    
    var liHover = document.querySelectorAll('.list-address li');


    liHover.forEach(element => {
        //console.log(element);
        element.addEventListener('mouseover', () => {
        let liId = element.getAttribute('data-id');

        aparecerImg(liId);
        })
});

function aparecerImg( id ) {

    let imagen = document.querySelector('.imagen-arch img');
    imagen.src = `img/list${id}.jpg`;
  
}
})
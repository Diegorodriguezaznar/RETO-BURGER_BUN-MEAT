
window.onload = function () {
    // Variables
    const IMAGENES = [
        '/IMG/carrusel_img1.png',
        '/IMG/carrusel_img2.png',
        '/IMG/carrusel_img3.png'
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3500;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    //let intervalo;

    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    renderizarImagen();
    setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
}
let numDadosTirar = 2;

let tipos = [
    "../../img/juegoDados/imgJuegoDadosPokemon/agua.webp",
    "../../img/juegoDados/imgJuegoDadosPokemon/fuego.webp",
    "../../img/juegoDados/imgJuegoDadosPokemon/planta.webp",
];

function generateNumRandom() {
    return Math.floor(Math.random() * tipos.length);
}

function play(idSeccionJugador1, idSeccionJugador2) {
    removeImg(idSeccionJugador1);
    removeImg(idSeccionJugador2);

    let img1 = document.createElement('img');
    let img2 = document.createElement('img');

    img1.src = generarTipo();
    img1.setAttribute('id', 'imgJugador1');

    img2.src = generarTipo();
    img2.setAttribute('id', 'imgJugador2');

    document.getElementById(idSeccionJugador1).appendChild(img1).innerHTML;
    document.getElementById(idSeccionJugador2).appendChild(img2).innerHTML;
}

function generarTipo() {
    return tipos[generateNumRandom()];
}

function removeImg(idContainer) {
    let imagenesExistentes = document.getElementById(idContainer).getElementsByTagName('img');
    for (let i = 0; i < imagenesExistentes.length; i++) {
        imagenesExistentes[i].remove();
    }
}
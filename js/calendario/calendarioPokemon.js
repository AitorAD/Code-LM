let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let fechaActual = new Date();

let diaActual = fechaActual.getDay();
let mesActual = fechaActual.getMonth();
let anyoActual = fechaActual.getFullYear();

let dias = document.getElementById('dias');
let mes = document.getElementById('mesActual');
let anyo = document.getElementById('anyoActual');

function fechaInicial() {
    mes.textContent = meses[mesActual];
    anyo.textContent = anyoActual.toString();
    writeMonth(mesActual);
}

function next() {
    if (mesActual !== 11) {
        mesActual++;
    } else {
        mesActual = 0;
        anyoActual++;
    }

    setNewDate();
}

function prev() {
    if (mesActual !== 0) {
        mesActual--;
    } else {
        mesActual = 11;
        anyoActual--;
    }

    setNewDate();
}

function writeMonth(mes) {
    let dateNow = new Date(Date.now());

    console.log(dateNow.toString());

    console.log(fechaActual.toString());

    dias.innerHTML = '';

    for (let i = startDay(); i > 0; i--) {
        dias.innerHTML += '<span></span>';
    }

    for (let i = 1; i <= getTotalDays(mes); i++) {
        if (fechaActual.getDate() === i && fechaActual.getMonth() === dateNow.getMonth() && fechaActual.getFullYear() === dateNow.getFullYear()) {
            dias.innerHTML += '<span id="today">' + i + '</span>';
        } else {
            dias.innerHTML += '<span>' + i + '</span>';
        }
    }
}

function getTotalDays(mes) {
    let totalDays = 0;

    if ((mes === 0) || (mes === 2) || (mes === 4) || (mes === 6) || (mes === 7) || (mes === 9) || (mes === 11)) {
        totalDays = 31;
    } else if ((mes === 3) || (mes === 5) || (mes === 8) || (mes === 10)) {
        totalDays = 30;
    } else if (mes === 1) {
        if (esBisiesto()) {
            totalDays = 29;
        } else {
            totalDays = 28;
        }
    }
    return totalDays;
}

function esBisiesto() {
    if ((anyoActual % 100 !== 0) && (anyoActual % 4 === 0) || anyo % 400 === 0) {
        return true;
    }
    return false;
}

function startDay() {
    let start = new Date(anyoActual, mesActual, 1);
    if (start.getDay() - 1 === -1) {
        return 6;
    }
    return start.getDay() - 1;
}

function setNewDate() {
    let dateNow = new Date(Date.now());
    fechaActual.setFullYear(anyoActual, mesActual, dateNow.getDate());
    anyo.textContent = anyoActual.toString();
    mes.textContent = meses[mesActual];

    writeMonth(mesActual);
}
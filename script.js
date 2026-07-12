function actualizarCuenta() {

    const ahora = new Date();

    let objetivo = new Date(
        ahora.getFullYear(),
        6,
        18,
        0,
        0,
        0
    );

    // Si ya pasó el 18 de julio de este año,
    // apunta al siguiente año.

    if (ahora > objetivo) {

        objetivo = new Date(
            ahora.getFullYear() + 1,
            6,
            18,
            0,
            0,
            0
        );

    }

    const diferencia = objetivo - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) / 1000
    );

    document.getElementById("days").innerHTML = dias;

    document.getElementById("hours").innerHTML =
        String(horas).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutos).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(segundos).padStart(2, "0");

}

actualizarCuenta();

setInterval(actualizarCuenta,1000);
function actualizarCuenta(){

    const ahora = new Date();

    let objetivo = new Date(
        ahora.getFullYear(),
        6,
        18,
        0,
        0,
        0
    );

    if(ahora > objetivo){

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

   if(diferencia <= 0){

    document.querySelector(".container").innerHTML = `

        <h1 class="final">
            ¡YA ESTÁ EN YOUTUBE!
        </h1>

        <p style="
            margin-top:25px;
            color:#deb6ff;
            font-size:22px;
        ">
            Escanea el código QR
        </p>

        <img src="qr.jpg" class="qr">

    `;


    return;

}

    const dias = Math.floor(diferencia/(1000*60*60*24));

    const horas = Math.floor((diferencia%(1000*60*60*24))/(1000*60*60));

    const minutos = Math.floor((diferencia%(1000*60*60))/(1000*60));

    const segundos = Math.floor((diferencia%(1000*60))/1000);

    document.getElementById("days").textContent=dias;

    document.getElementById("hours").textContent=String(horas).padStart(2,"0");

    document.getElementById("minutes").textContent=String(minutos).padStart(2,"0");

    document.getElementById("seconds").textContent=String(segundos).padStart(2,"0");

}

actualizarCuenta();

setInterval(actualizarCuenta,1000);
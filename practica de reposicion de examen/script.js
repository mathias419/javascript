function recomendar() {
    let presupuesto = Number(document.getElementById("presupuesto").value);
    let personas = Number(document.getElementById("personas").value);
    let tipo = document.getElementById("actividad").value;
    let actividad = "";
    let descuento = 0;

    if (document.getElementById("presupuesto").value === "" ||
        document.getElementById("personas").value === "" ||
        tipo === "") {
        alert("Complete todos los campos");
        return;
    }

    if (presupuesto < 0 || personas <= 0 ||
        !Number.isInteger(personas)) {
        alert("Ingrese datos válidos");
        return;
    }

    switch (tipo) {
        case "deportes":
            if (presupuesto<8000) {
                actividad = "Caminata recreativa";
            } else if (presupuesto<=15000) {
                actividad = "Alquiler de cancha";
            } else {
                actividad = "Actividad deportiva especializada";
            }
            break;

        case "entretenimiento":
            if (presupuesto<8000) {
                actividad = "Actividad económica";
            } else if (presupuesto<=15000) {
                actividad = "Entrada al cine";
            } else {
                actividad = "Concierto o espectáculo";
            }
            break;

        case "turismo":
            if (presupuesto<8000) {
                actividad = "Visita a parque público";
            } else if (presupuesto<=15000) {
                actividad = "Tour local";
            } else {
                actividad = "Excursión de día completo";
            }
            break;

        case "familiares":
            if (presupuesto < 8000) {
                actividad = "Picnic familiar";
            } else if (presupuesto<=15000) {
                actividad = "Salida recreativa";
            } else {
                actividad = "Parque temático";
            }
            break;
    }

    if (personas <= 4) {
        descuento = 0;
    } else if (personas <= 8) {
        descuento = 9;
    } else {
        descuento = 15;
    }

    let monto = presupuesto * descuento / 100;
    let total = presupuesto - monto;

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>" +
        "<p>Actividad: " + actividad + "</p>" +
        "<p>Presupuesto: ₡" + presupuesto + "</p>" +
        "<p>Personas: " + personas + "</p>" +
        "<p>Descuento: " + descuento + "%</p>" +
        "<p>Monto descontado: ₡" + monto + "</p>" +
        "<h3>Presupuesto final: ₡" + total + "</h3>";
}

function reiniciar() {
    document.getElementById("presupuesto").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("actividad").value = "";

    document.getElementById("resultado").innerHTML =
        "<h2>Resultado</h2>";
}
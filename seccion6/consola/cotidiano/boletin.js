
let notasClase =[7, 4, 8, 9, 6];

// Funcion para que las notas salgan en la lista apenas abre la pagina
function mostrarNotas() {
    let listaUL = document.getElementById("lista-notas");
    let acumulador = "";
    
   
    for (let i = 0; i < 5; i++) {
        acumulador = acumulador + "<li>" + notasClase[i] + "</li>";
    }
    
    listaUL.innerHTML = acumulador;
}


function calcularPromedio() {
    let sumaNotas = 0;
    
   
    for (let nota of notasClase) {
        sumaNotas = sumaNotas + nota;
    }
    
    let totalPromedio = sumaNotas / 5;
    document.getElementById("res-promedio").innerHTML = totalPromedio;
}

// Funcion conectada al segundo boton
function notaMasAlta() {
    let elMayor = notasClase[0]; // Empezamos con el primer numero
    
    // Otro for...of para revisar cual es el numero mas grande
    for (let nota of notasClase) {
        if (nota > elMayor) {
            elMayor = nota;
        }
    }
    
    document.getElementById("res-maxima").innerHTML = elMayor;
}

// Funcion conectada al tercer boton (usa la etiqueta obligatoria)
function hayAplazados() {
    let tieneAplazo = "No";
    
    // Ponemos la etiqueta al bucle con un nombre sencillo en español
    cicloRevision:
    for (let i = 0; i < 5; i++) {
        // Si la nota baja de 4 se activa el aplazo
        if (notasClase[i] < 4) {
            tieneAplazo = "Sí";
            break cicloRevision; // Rompe el bucle usando la etiqueta
        }
    }
    
    document.getElementById("res-aplazados").innerHTML = tieneAplazo;
}

// Ejecutamos la primera funcion al inicio para llenar la lista
mostrarNotas();

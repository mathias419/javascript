function evaluarcompra(cantidaddisponible){
    let elementoRespuesta = document.getElementById("desicion");
    let elementocantidad = document.getElementById("texocantidad");
    let cantidadcomprada = elementocantidad.value;
    if(cantidadcomprada <= cantidaddisponible){
        elementoRespuesta.textContent = " compraste" + cantidadcomprada + "hay disponible aun " + (cantidaddisponible - parseInt(cantidadcomprada)).toString();
    }
}
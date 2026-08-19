function calcular() {
let elementoRESPUESTA1 = document.getElementById("RESPUESTA1");
let elementoRESPUESTA2 = document.getElementById("RESPUESTA2");
let elementoRESPUESTA3 = document.getElementById("RESPUESTA3");

     let elementoEdad = document.getelementbyid("textoedad");
     let edad = elementoEdad.value;
+
     let puedeBeber = edad >= 18;elementoRESPUESTA1.textContent = puedeBeber;
     
     let puedeIngresar = edad >= 18 && edad <= 30;elementoRESPUESTA2.textContent = puedeIngresar;

     let entradagratis = edad == 20 || edad == 25;elementoRESPUESTA3.textContent = entradagratis;
}
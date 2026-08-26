
function consultarprecio(){
let elementoRespuesta =document.getElementById("textoprecio");

let elementofruta = document.getElementById("numerofruta")
let fruta = elementofruta.ariaValueMax;

switch(fruta)

{
case"1":
elementoRespuesta.textContent = "8,45";
break;

case"2":
elementoRespuesta.textContent = "6.32";
break;

case"3":
elementoRespuesta.textContent = "8,45";
break;
}
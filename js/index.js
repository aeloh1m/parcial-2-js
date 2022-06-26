// document.getElementById("button").onclick = function() {
// 	alert("Hello World!");
// }

const mensaje = document.getElementById('mensaje'); /* Como diferencia al enunciado (div#result), fui cambiando el div "mensaje" del html 
generando template strings con dos clases CSS (error, success). */

const iphoneImage = document.getElementById('imageip');
const iphoneSwitch = document.getElementById('color');
const selectCapacidad = document.getElementById("capacidad");

// inputs
var input128 = document.getElementById("128");
var input256 = document.getElementById("256");
var input512 = document.getElementById("512");

var selectCantidad = document.getElementById("cantidad");

var cotizaciones = {
    cap128: 150000,
    cap256: 165000,
    cap512: 180000,
};

// Calculador de precio:

function calculatePrice() {

    var cantidad = Number(selectCantidad.value);
    var valorIphone = Number(cotizaciones[selectCapacidad.value]);
    var precioFinal = cantidad * valorIphone;
    var error_msg =  `<div id="mensaje" class="error"><h3>Error: ingresar valores válidos</h3></div>`;
    var success_msg = `<div id="mensaje" class="success"><h3>Cotización $${precioFinal}</h3></div>`;
    
    //validación

    if (validarSectores(color, capacidad, cantidad)) // Si es False, cierra la ejecución de la Fn.
    return;

    // Caso contrario prosigue con otras validaciones
    if (cantidad < 1 || cantidad > 10) 
    {   return  mensaje.innerHTML = error_msg
        válido = false
    }
    else
    {
        return mensaje.innerHTML = success_msg 
    } 

};

// Validador:

function validarSectores(color, capacidad, cantidad) {

    if (color.value == "" || capacidad.value == "" || cantidad == 0 )  // chequeamos si hay valores falsos
    return mensaje.innerHTML = `<div id="mensaje" class="error"><h3>Error, complete todos los campos.</h3></div>`; 

}

// Cambiar Imagen del producto:

function changeProductImage() {
    iphoneSwitch.onchange = function (select) { // toma el cambio de imagen desde el select
        iphoneImage.src = "img/" + select.target.value + ".png"; // y lo procesa con el cambio correspondiente al nuevo valor
    }

};



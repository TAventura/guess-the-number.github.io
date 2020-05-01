const txtNum = document.getElementById("txtNum"); //añado una constante que representa al txt.
//añado un eventListener que cuando se presione una tecla llame a la funcion para que valide si es enter
txtNum.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault;
        validar();
    }
});

let num = definirNro();
const intentosPermitidos = 10; //puede probar diez veces
let intentos = 0; //cuantas veces probó hacerlo


function definirNro() {
    txtNum.disabled = false;
    return Math.floor(Math.random() * 100); //numeros del 1 al 100.
}

function validar() {
    let victoria = 0; //bandera, si gano es 1, si no, es 0
    const resultados = document.getElementById("resultados");
    intentos = intentos + 1; //le sumamos uno a los intentos que hizo
    if (txtNum.value == num) { //LE PONGO DOS IGUALES PARA QUE HAGA LA CONVERSION DE TEXTO A NUMERO.
        resultados.innerHTML = "¡Bien Hecho!!!!!! El numero es ese!!!!"
        victoria = 1;
    } else if (txtNum.value < num) {
        resultados.innerHTML = "¡Nop! El numero es mayor a ese<br>Intentos restantes " + (intentosPermitidos - intentos)
    } else if (txtNum.value > num) {
        resultados.innerHTML = "¡Noooo! El numero es menor que eso<br>Intentos restantes " + (intentosPermitidos - intentos)
    }
    txtNum.value = "";
    if (intentos === intentosPermitidos) {resultados.innerHTML = "¡Incorrecto!!! Te quedaste sin intentos, el número era:" + num;}
    if (intentos === intentosPermitidos || victoria===1) {
        txtNum.disabled = true; //deshabilitamos para que no pueda ingresar más.
        document.getElementById("btnEnviar").disabled = true;
        document.getElementById("btnReiniciar").style.display = "block";
    }
}

function reiniciar() {
    intentos = 0;
    document.getElementById("btnReiniciar").style.display = "none";
    document.getElementById("resultados").innerHTML = "";
    txtNum.disabled = false; //deshabilitamos para que no pueda ingresar más.
    document.getElementById("btnEnviar").disabled = false;
}

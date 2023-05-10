
var filas = parseInt(prompt("Dime el número de filas que tendrá la pirámide:"));

var piramide = "";

for (var fila = 0; fila < filas; fila++) {

  for (var columna = 0; columna < filas*2-1; columna++) {

    if (columna >= (filas - fila - 1) && columna < (filas + fila)) {
      piramide += "o";
    } else {
      piramide += "&nbsp;"+"&nbsp;"; 
    }
  }

  piramide += "<br>";
}

var numDiv = parseInt(prompt("Elige un número entre 1 y 5 para determinar la posición de la pirámide:"));

var divResultado = document.getElementById(numDiv.toString());

var numColor = parseInt(prompt("Escribe un número para elegir el color de la pirámide (1: Rojo, 2: Verde, 3: Azul):"));


switch (numColor) {
  case 1:
    divResultado.style.color = "red";
    break;
  case 2:
    divResultado.style.color = "green";
    break;
  case 3:
    divResultado.style.color = "blue";
    break;
  default:
    alert("El color que has escrito no es válido");
    break;
}

divResultado.innerHTML = piramide;
var filas = parseInt(prompt("Ingrese el número de filas:"));

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

var numeroDiv = parseInt(prompt("Elige un número entre 1 y 5:"));

var divResultado = document.getElementById(numeroDiv.toString());

var numeroColor = parseInt(prompt("Elige un número para el color del texto (1 = rojo, 2 = verde, 3 = azul):"));


switch (numeroColor) {
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
    divResultado.style.color = "black"; 
    break;
}

divResultado.innerHTML = piramide;
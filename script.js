var suma = 0;
var media = 0;
var contador = 0;

do {
    var numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        numero = Number(numero);
        contador++;
        suma = suma + numero;
        media = suma / contador;
    }
    
    else {
    
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }

} while (numero != undefined);

document.write("La suma total de los numeros introducidos es: " + suma);
document.write("<br>");
document.write("La media de los numeros introducidos es: " + media);
document.write("<br>");
document.write("La cantidad de numeros introducidos es: " + contador);

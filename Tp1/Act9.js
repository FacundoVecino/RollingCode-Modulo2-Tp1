let cont, texto, maxcont, caracter;
texto = prompt("Ingrese un texto");
maxcont = texto.length;
cont=0;

while (cont<=maxcont) {
    caracter = texto.charAt(cont);
    if ((caracter == 'a') || (caracter == 'e') || (caracter == 'i') || (caracter == 'o') || (caracter == 'u')) {
        console.log(caracter);
    }
    cont++;
}
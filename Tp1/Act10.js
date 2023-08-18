let num;
num = parseInt(prompt("Ingrese un numero"));
if (num % 2 == 0) {
    console.log("El", num, "es divisible por 2");
} else if (num % 3 == 0) {
    console.log("El", num, "es divisible por 3");
} else if (num % 5 == 0) {
    console.log("El", num, "es divisible por 5");
} else if (num % 7 == 0) {
    console.log("El", num, "es divisible por 7");
} else {
    console.log("No es divisible por 2, 3, 5 ni 7")
}
let primNum, segNum;

primNum = prompt("Ingrese un numero")
segNum = prompt("Ingrese otro numero")
if (parseInt(primNum) < parseInt(segNum)) {
   console.log("El",segNum, "es el numero mas grande");
} else if (parseInt(primNum) > parseInt(segNum)) {
    console.log("El",primNum, "es el numero mas grande");
}
else {
    console.log("Los dos numeros son iguales");
}
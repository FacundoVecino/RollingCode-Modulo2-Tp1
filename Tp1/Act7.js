let primNum, segNum, terNum;

primNum = prompt("Ingrese un numero");
segNum = prompt("Ingrese otro numero");
terNum = prompt("Ingrese otro numero");

if (parseInt(primNum) < parseInt(segNum)) {
    if (parseInt(segNum) < parseInt(terNum)){
    console.log("El", terNum, "es el numero mas grande");
    } else {
        console.log("El",segNum, "es el numero mas grande");
    }
} else if (parseInt(primNum) > parseInt(segNum)) {
    if (parseInt(primNum) < parseInt(terNum)){
        console.log("El", terNum, "es el numero mas grande");
    } else {
        console.log("El",primNum, "es el numero mas grande");
    }
}
else {
    console.log("Los tres numeros son iguales");
}
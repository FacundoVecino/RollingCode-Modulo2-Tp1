let num, divs;
divs = [];
num = parseInt(prompt("Ingrese un numero"));
if (num % 2 === 0) {
    divs.push(2);
}
if (num % 3 === 0) {
    divs.push(3);
}
if (num % 5 === 0) {
    divs.push(5);
}
if (num % 7 === 0) {
    divs.push(7);
}
if (divs.length === 0){
    console.log("El numero", num, "no es divisible por 2, 3, 5 ni 7");
} else {
    console.log("El numero", num, "es divisible por los siguientes numeros:");
    console.log(divs.join(" "));
}
/*------Alternativa-------
let num;
num = parseInt(prompt("Ingrese un numero"));
if (num % 2 == 0) {
    if (num % 3 == 0) {
        if (num % 5 == 0) {
            if (num % 7 == 0) {
                console.log("El numero", num, "es divisible por 2, 3, 5 y 7")
            } else {
                console.log("El numero", num, "es divisible por 2, 3 y 5")
            }
        } else {
            console.log("El numero", num, "es divisible por 2 y 3")
        }
    } else {
        console.log("El numero", num, "es divisible por 2")
    }
} else if (num % 3 == 0) {
        if (num % 5 == 0) {
            if (num % 7 == 0) {
                console.log("El numero", num, "es divisible por 3, 5 y 7")
            } else {
                console.log("El numero", num, "es divisible por 3 y 5")
            }
        } else {
            console.log("El numero", num, "es divisible por 3")
        }
} else if (num % 5 == 0) {
    if (num % 7 == 0) {
        console.log("El numero", num, "es divisible por 5 y 7")
    } else {
        console.log("El numero", num, "es divisible por 5")
    }
} else if (num % 7 == 0) {
    console.log("El numero", num, "es divisible por 7")
}
*/
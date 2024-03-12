let a = 2;

let b = -10;

if (b % 1 != 0 || a % 1 != 0) {
    console.log("operação não realizavel pois algum valor não é inteiro");
} else if (a > 0 && b > 0) {
    for (let i = 1; i <= b; i++) {
        console.log(a, "x", i, "=", (i * a));
    }
} else if (a == 0 || b == 0) {
    console.log("operação não realizavel, pois algum valor é igual a 0");
} else {
    console.log("operação não realizavel, pois algum número é menor que 0");
}
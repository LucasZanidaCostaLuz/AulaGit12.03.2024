let tabuada = -2.5;

let b = -10.3;

if (b % 1 != 0 || a % 1 != 0) {
    console.log("operação não realizável pois algum valor não é inteiro");
} else if (a > 0 && b > 0) {
    for (let i = 1; i <= b; i++) {
        console.log(a+ "vezes"+ i+ "é igual a"+ i * a);
    }
} else if (a == 0 || b == 0) {
    console.log("operação não realizável, pois algum valor é igual a 0");
} else {
    console.log("operação não realizável, pois algum número é menor que 0");
}
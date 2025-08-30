const arr = []; //Declarar el arreglo y llenarlo
for (let index = 0; index < 10; index++) {
    arr[index]=index + 1;
};
console.log("Arreglo inicial: ",arr);
arr.forEach((num, i) => {
    if (num % 2 == 0) {
        console.log("Número par: ", num);
    }
});
const square = arr.map(function(numero,j){
    return numero * numero;
});
console.log("Cuadrados: ",square);
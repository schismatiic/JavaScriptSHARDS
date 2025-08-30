// var → scope de función, permite redeclarar y reasignar, tiene hoisting.
// let → scope de bloque, NO redeclarar, sí reasignar, temporal dead zone.
// const → scope de bloque, NO redeclarar, NO reasignar, pero objetos/arrays mutables.
var vboolean = true;

/* 
if (vboolean == true) {
    var hola = "Hola";
    let chao = "Chao";
    const adios = "Adios";
    vboolean = false;
}
console.log(hola);
console.log(chao);
console.log(adios);
*/
var hola = "Hola";
hola = "HOLAAAAAA"
let chao = "Chao";
const adios = "Adios";
const adios = "23";
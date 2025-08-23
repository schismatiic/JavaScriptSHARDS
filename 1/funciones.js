/*
3) Funciones y contador simple
Meta: Practicar funciones normales y anónimas.

Declara una función normal makeCounter que reciba un número inicial y devuelva un objeto con dos funciones anónimas:

next: suma 1 al contador y lo devuelve.
reset: reinicia el contador al valor inicial.
Prueba el contador mostrando al menos tres llamadas a next() y luego un reset().
*/

function makeCounter(numInicial){
    let count = numInicial;

        count++;
        return count;
    }
    const reset = function(){
        count = numInicial;
        return count;
    }
    return {
        next: next,
        reset: reset
    };
}

let cont = makeCounter(0);
cont.next();
cont.next();
cont.next();
cont.next();
cont.next();

console.log(cont.next());
console.log(cont.reset());


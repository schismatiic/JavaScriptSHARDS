function makeCounter(numInicial) {
    let count = numInicial;

    let next = function(){
        count++;
        return count;
    };

    let reset = function(){
        count = numInicial;
        return count;
    }
    return {
        next: next,
        reset: reset
    };
};

function makeToggle(initial=false){
let v = initial;
return { get:()=>v, toggle:()=> (v=!v) };
}

let cont = makeCounter(0);
cont.next();
cont.next();
cont.next();
cont.next();
cont.next();
console.log(cont.next());
cont.reset();
console.log(cont.reset());


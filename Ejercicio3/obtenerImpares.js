const prompt = require("prompt-sync")({ sigint: true });


const oddNumber = (number) =>{
    let iterator = 1;
    const odd = [];
    if(number>0){
        do {
            let mod = iterator % 2;
            if (mod !== 0) odd.push(iterator);
            iterator++;
        } while (iterator <= number); 
       console.log(odd);
    }else{
        console.error("Solo se admiten números positivos mayores a 0");
    }
}

let number = prompt("Por favor ingrese un número ",0);
oddNumber(number);

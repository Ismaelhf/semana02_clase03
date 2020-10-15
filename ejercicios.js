const dividir = (x,y) => {
    console.log(x/y);
}

dividir(4,2);

const pushString = (cadena, letra) =>{
    console.log(cadena+letra);
}

pushString('hola mund','o');


const addArray = (array, array2) =>{
    array.push(array2);
    console.log(array);
}

addArray(['ismael','fredy'], 'carlos');

// 4) migrar la función bill a arrow function
const bill = (products,tax) =>{
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log('bill', bill([10,12,13], 0.18));

let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector ('#resultado');

function somar (){
    let final = Number(numero1.value) + Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) + Number(numero2.value);
}

function subtrair(){
    let final = Number(numero1.value) - Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) - Number(numero2.value);
}

function dividir(){
    let final = Number(numero1.value) / Number(numero2.value);
    resultado.innerHTML = final;
    resultado.value = Number(numero1.value) / Number(numero2.value);
}

function multiplicar(){
    let final = Number(numero1.value) * Number(numero2.value);
    resultado.innerHML = final;
    resultado.value = Number(numero1.value) * Number(numero2.value);
}
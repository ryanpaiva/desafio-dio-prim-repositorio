const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
      return  item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));

//função sem this

function mapSemThis(arr) {
    return arr.map(function(item) {
        return item * 2;
    });
}

const num = [2, 4, 6, 8, 10];

console.log(mapSemThis(num));
console.log(num);

//filter nums pares array

/*function filtraPares(arr) {
    return arr.filter(function(item) {
        return item % 2 === 0;
    })
}   */

function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const myArray = [1, 2, 15, 24, 33, 8, 98, 6, 71];

console.log('Os números pares são:', filtraPares(myArray));

//reduce

function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    })
}

const arr = [1, 2];

console.log('A soma é:', somaNumeros(arr));

//reduce SALDO  

const lista = [
    {
        name: 'sabao em po',
        preco: 14,
    },
    {
        name: 'chocolate',
        preco: 5,
    },
    {
        name: 'Panela',
        preco: 30,
    },
];

const saldoDisponivel = 60;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada ", index + 1);
        console.log({prev});
        console.log([current]);
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log("O saldo disponível é de: ", calculaSaldo(saldoDisponivel, lista));
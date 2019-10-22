// functions
// vanilla
/*function sum() {
  let resultado = 0
  for (panchita in arguments) {
    resultado+= Number(arguments[panchita])
  }
  return resultado
}
sum(2, 3, 5, 3, 2, 1, 1)

const param1 = 'no lol'
// es6
const fn = (p1, times) => {
  console.log(p1, times)
};

// funciones anonimas
// () => {}
// function() {}

// funciones autoejecutables
// (() => {})()
// (function() {})()

function eat() {
  setTimeout(function() {
    console.log('aqui esta el contenido')
  }, 10000)
  console.log('Platzi');
}

eat()


const add = function(a) {
  return function(b) {
    return a + b;
  };
};


const add = a => (b = 4) => a + b

add(4)(5);
// => 9

function factorial(number) {
  if (number === 0) { return 1; }
  return number * factorial(number - 1);
}

// 3 * 2 * 1 * 1
*/

const foods = [
  'Bao vegetariano',
  'Tacos de pastor',
  'Tacos de asada',
  'Carne asada',
  'Enchiladas',
  'Enmoladas',
  'Lasagna',
  'Ramen',
  'Tacos dorados de carne',
  'Picaña',
  'Hamburguesas',
  'Sushi',
  'Arrachera',
  'Jamon',
  'Tacos de suadero',
  'Milanesa',
  'Cochinita Pibil',
  'Tacloyo',
  'Tacos de tripa sin lavar'  
]

//console.log(foods[foods.length - 1])
// agregar
// al FINAL
foods.push('Barbacoa')
// al INICIO
foods.unshift('Pasta')

// quitar
// al FINAL
foods.pop()
// al INICIO
foods.shift()

// nos regresa el indice del elemento
// si no lo encuentra, nos regresa -1
foods.indexOf('Tlayudas')
let idx = foods.indexOf('Tacos de pastor')
foods.splice(idx, 5, 'Tacos de pastor 🔥', 'Lol')
// console.log(foods)
// recorrer
// foods.forEach(upperCase)
const upperCase = e => e.toUpperCase()
let newFoods = foods.map(upperCase)

console.log(newFoods)

let arr = [5, 4, 2, 8, 9, 2, 10]

arr.sort((num1, num2) => {
  return num2 - num1
})

console.log(arr)

const arr = [1, 2, 3, 4, 5, 6, 7]
const arrCopy = arr.map(element => element)
const arrmul2 = arr.map(element => element * 2)
const arrCopy2 = arr.forEach(element => element * 2)

const teacherassistant = [
  {
    name: 'isa',
    age: 39
  },
  {
    name: 'bicho',
    age: 30
  },
  {
    name: 'mariana',
    age: 24
  }
]

const isa = teacherassistant.filter(ta => ta.name.includes('a') && ta.age < 30)

const average =
  teacherassistant.reduce((acumulador, actual) => acumulador + actual.age, 0) /
  3

console.log(average)

console.log(isa)

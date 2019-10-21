const name = 'Joss'

console.log(`hola soy ${name}`)

console.log(`hola
Ironhackers
`)

console.log(name.slice(-2, -2))

console.log('la'.repeat(10))

'ba'.localeCompare('bb')

console.log(3 < 2 || !(3 > 80))
console.log(!false)

let city = 'miami'
console.log(city[0])
city[0] = 'M'
console.log(city[0])
console.log(city)

console.log(null === undefined)

console.log(3e2 - 3)

let anyNumber = 5.679345
let roundedToOne = Number(anyNumber.toFixed(1))
console.log(roundedToOne + 3)

console.log(1e400)

const age = 16

switch (age) {
  case 16:
    console.log('You have a teenager discount.')
    break
  case 65:
    console.log('You have a senior citizen discount :)')
    break
  default:
    console.log("Sorry, you don't have any discount :(")
    break
}
let i = 1

while (i <= 50) {
  console.log('i: ', i)
  i++
}

let i = 1

do {
  console.log('hola')
  i++
} while (i <= 10)

let i = 0

while (i < 5) {
  i++
  if (i === 3) {
    continue
    console.log('asdasd')
  }
  console.log(`The number is: ${i}.`)
}

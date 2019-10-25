const p = [new Pet('Maui', 'S', 'Dog')]

function Pet(name, size, type) {
  this.name = name
  this.size = size
  this.type = type
  this.showName = () => {
    console.log(`Hola mi nombre es: ${this.name}`)
  }
}

function Dog(name, size) {
  Pet.call(this, name, size, 'Dog')
}

function Parrot(name, size, fly, favoriteFood) {
  Pet.call(this, name, size, 'Parrot')
  this.fly = fly
  this.showName = function() {
    return `Hola mi nombre es: ${this.name} y puedo volarrrrr`
  }
  this.showFFood = function() {
    return `Me encanta comer ${favoriteFood.map(food => `${food}`)}`
  }
}

Dog.prototype = Object.create(Pet.prototype)
Parrot.prototype = Object.create(Pet.prototype)

Dog.prototype.constructor = Dog

let blaki = new Dog('Blaki', 'S')
let luca = new Dog('Luca', 'M')
let tobias = new Parrot('Tobias', 'S', true, [
  'semillas',
  'semillas',
  'semillas'
])

luca.showName()

console.log(tobias.showName(), 'y', tobias.showFFood())

console.log(tobias.size)

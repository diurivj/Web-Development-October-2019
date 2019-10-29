class Pet {
  constructor(name, size, type) {
    this.name = name
    this.size = size
    this.type = type
  }
  showName() {
    return `Hola mi nombre es: ${this.name}`
  }
}

class Dog extends Pet {
  constructor(name, size) {
    super(name, size, 'Dog')
    this.sound = 'wof'
  }
  makeSound() {
    console.log(sound)
  }
}

class Parrot extends Pet {
  constructor(name, size, fly, favoriteFood) {
    super(name, size, 'Parrot')
    this.fly = fly
    this.favoriteFood = favoriteFood
  }
  showName() {
    return `Hola mi nombre es: ${this.name} y puedo volarrrrr`
  }
  showFFood() {
    return `Me encanta comer ${favoriteFood.map(food => `${food}`)}`
  }
}

const pet = new Pet('x', 's', 'undefined')
let luca = new Dog('Luca', 'M')
let tobias = new Parrot('Tobias', 'S', true, [
  'semillas',
  'semillas',
  'semillas'
])

Pet.prototype.age = 5

pet.showName()
console.log(luca.showName())
console.log(tobias.showName())
console.log(tobias.age)
luca.age = 2
console.log(luca.age)

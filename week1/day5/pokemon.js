class Pokemon {
  constructor(hp, attack, defense, name, evolve = false) {
    this.hp = hp
    this.defense = defense
    this.attack = attack
    this.name = name
    this.evolve = evolve
  }
  attacks(pokemon) {
    pokemon.receiveDamage(this.attack - pokemon.defense)
  }
  receiveDamage(damage) {
    this.hp -= damage
  }
}

class FireType extends Pokemon {
  constructor(hp, attack, defense, name, evolve = false) {
    super(hp, attack, defense, name, evolve)
    this.type = 'Fire'
  }
}

class WaterType extends Pokemon {
  constructor(hp, attack, defense, name, evolve = false) {
    super(hp, attack, defense, name, evolve)
    this.type = 'Water'
  }
  attacks(pokemon) {
    if (pokemon.type === 'Fire') {
      pokemon.receiveDamage(this.attack * 2 - pokemon.defense)
      return pokemon.hp
    }
    pokemon.receiveDamage(this.attack - pokemon.defense)
  }
}

const charmander = new FireType(100, 15, 5, 'Flamitas', true)
const vamoacalmarnos = new WaterType(80, 10, 3, 'Calmadito', true)

Pokemon.prototype.info = function() {
  console.log(this.name, this.hp)
}

vamoacalmarnos.attacks(charmander)
vamoacalmarnos.attacks(charmander)

charmander.info()

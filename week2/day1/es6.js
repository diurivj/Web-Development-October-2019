// const name = 'Diego';
// const lastname = 'Vazquez';
// const menorDeEdad = true



// console.log(`${name} 
// ${lastname} ${menorDeEdad ? 'miente' : '🍺'}`)

// menorDeEdad || name === 'Diego' ? 'no lo dejes pasar' : lastname === 'Vazquez' ? 'dejalo pasar' : 'no hagan esto'

const cd = {
  name: 'Jesus Is King',
  author: 'Kanye West ft God',
  tracks: 11,
  isGood: true,
  duration: '27 min',
  bestSong: {
    name: 'Use This Gospel',
    otherArtist: 'Kenny G'
  }
}

let artistaChingon = cd.bestSong.otherArtist;
artistaChingon = 'Becky G';

const { author, name: primernombre , bestSong } = cd

//console.log(cd)

// console.log(name, bestSong.name)

const fn = () => [0, 1, 2, 3, 4, 5]

const [, , , laquesimeimporta, ...losdelmonton] = fn()

const primervalor = fn()[0]

// console.log(primervalor)

const reduce = (...numbers) => {
  let res = 0;
  for (number of numbers) {
    res += number
  }
  return res
}

// reduce(1, 2, 3, 4, 5, 6, 7, 8, 9)

class Lol {
  constructor(name) {
    this.name = name  
  }
  sayName() {
    setTimeout(() => {
      console.log(this.name)
    }, 1000)
  }
}

const lolsito = new Lol('Diego');
lolsito.sayName()

/*let counter = 0;
let lolol = setInterval(() => {
  counter++
  console.log(counter)
}, 1000)

setTimeout(() => {
  clearInterval(lolol)
}, 12000)

setTimeout(() => {
  clearInterval(lolol)
}, 5000)

setTimeout(() => {
  lolol = setInterval(() => {
  counter++
  console.log(counter)
  }, 1000)
}, 6000)
*/
// setInterval
// ES una fn que recibe un callback, y se ejecuta infinitamente cada cierto tiempo que nosotros le decimos

// setTimeout
// ES una fn que recibe un callback, y se ejecuta despues de cierto tiempo que le especificamos nosotros

setInterval(() => {
  console.log('Hola desde el pasado')
}, 5000)

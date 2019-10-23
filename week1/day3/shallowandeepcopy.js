const joss = {
  name: 'Jose Carlos',
  hobbies: ['jugar videojuegos', 'tocar guitarra']
}

const malo = {malo: true}

const jossMalvado = Object.assign(malo, joss)

console.log(jossMalvado)

const book1 = {
  author: 'Charlotte Bronte',
  publishers: [
    (publisher1 = {
      companyName: 'AB'
    }),
    (publisher2 = {
      companyName: 'CD'
    })
  ]
}

const obj = {}

const book3 = {...book1}

book1.publishers[0] = {
  companyName: 'Super Cool Company'
}

book1.author = 'Test Test' // <== here we changed the aouthor name in the original (book1)

console.log(book3)

const arr = [1, 2, 3, 4, 5, 6, 7]

const arrCopy = arr.concat(8)

arr.pop()

console.log(arr, arrCopy)

const obj = {
  x: 'x'
}

const obj3 = {
  z: 'z'
}

// const obj2 = Object.assign({y: 'y'}, obj)

const obj2 = {...obj, ...obj3}

obj3.h = 'h'

obj2.y = 'y'

console.log(obj2, obj3)

// Destructuring

const book = {
  author: 'Charlotte Bronte',
  pages: 400,
  publishers: [
    {
      name: 'publisher1'
    },
    {
      name: 'publisher2'
    }
  ]
}

// ES5
/*
const author = book.author
const pages = book.pages
const publishers = book.publishers
*/

//es6
const {author, pages, publishers} = book

console.log(author)

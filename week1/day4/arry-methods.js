const students = [
  { 
    name: 'Maria',
    age: 28,
    hobbies: ['Yoga', 'Reading'],
    funFact: '🐕🐕🐕' 
  },
  {
    name: 'David',
    age: 25,
    hobbies: ['Piano', 'Box'],
    funFact: 'Fetiche con las quesadillas de mermelada 🍓'
  },
  {
    name: 'Pablo',
    age: 24,
    hobbies: ['Modelismo', 'Soccer'],
    funFact: '🕺🏻🇨🇺'
  },
  {
    name: 'Ulises',
    age: 25,
    hobbies: ['Futbolito', 'Viajar'],
    funFact: 'Coleccionas tazas feas'
  },
  {
    name: 'Diego',
    age: undefined,
    hobbies: ['Bowling', 'Music'],
    funFact: 'La cicatriz que tengo en la frente es por un senor inombrable mejor conocido como Lord Voldemort'
  },
    {
    name: 'Diego',
    age: undefined,
    hobbies: ['Bowling', 'Music'],
    funFact: 'La cicatriz que tengo en la frente es por un senor inombrable mejor conocido como Lord Voldemort'
  }
];

const lastnames = [
  'Santos',
  'Ibarra',
  'Peralta',
  'Aquino',
  'Jaramillo',
  'Jaramillo'
]

// MAP 
// doesn't mutate the array, could be tricky with objects
const newArr = students.map((student, idx) => {
  const copyStudent = { 
    ...student,
    name: `${student['name']} ${lastnames[idx]}`,
    grade: idx + 6
  };
  return copyStudent
});

// FILTER
// filter doesn't mutate the original array, only return the elements that match with the expression
const graduados = newArr.filter(student => student.name.includes('Di') )

// REDUCE
// siempre inicializar el accumulador (2 parametro)
const nums = [0, 1, 2, 3, 4, 5];
let resultado = 0;
nums.map(num => {
  resultado += num
})

const res = nums.reduce((acc, num) => acc + num, 0);

const letters = ['D', 'i', 'e', 'g', 'o']
const minombreenf = letters.reduce((acc, s) => {
  if (s === 'g') return acc + s 
  return acc + s + 'f' + s
});

// sort
// mutate the original array
const desordenados = [9, 5, 7, 1, 3, 4]

const ordenados = [...desordenados].sort((num1, num2) => num1 - num2);

const alphabetic = newArr.sort((student1, student2) => {
  if (student1.name > student2.name) {
    return 1 
  } else if (student1.name < student2.name) { 
    return -1 
  } else {
    if (student1.grade > student2.grade) {
      return -1
    } else if (student1.grade < student2.grade) { 
      return 1
    } else {
      return 0
    }
  }
})

console.log(alphabetic.reverse())

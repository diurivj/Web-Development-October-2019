// const catElement = document.getElementById('cat')

// let a = 0

// if (a >= 1) {
//   catElement.innerText = 'Cat'
//   catElement.style.backgroundColor = '#31dafb'
// } else {
//   catElement.innerText = 'Garfield'
//   catElement.style.backgroundColor = 'coral'
// }

const catElement = document.getElementById('cat')

let a = 5

catElement.innerText = 'Cat'

const catStyles = {
  backgroundColor: 'blue',
  border: '2px dashed #232323',
  fontSize: '1.3rem',
  borderRadius: '4px'
}
// ===
// catStyles.backgroundColor = 'blue'
// catStyles.border = '2px dashed #232323'
// catStyles.fontSize = '1.3rem'
// catStyles.borderRadius = '4px'

//                   {} <- {...catStyles}
// Object.assign(catElement.style, catStyles)

// catElement.style.backgroundColor = a >= 1 ? '#31dafb' : 'coral'

// Generates a random color in hexadecimal (ie. #62b9cc)
// function generateRandomColor() {
//                                       //FFFFFFF
//   return '#'+Math.floor(Math.random()*16777215).toString(16);
// }

// // Changes the color of the background using STYLE
// function changeBackgroundColor() {
//   var colorBg =   document.getElementById("color-overlay")
//   colorBg.style.backgroundColor = generateRandomColor();
// }

// function changeBackgroundText() {
//   var textBg = document.getElementById("text-bg")
//   if (textBg.innerHTML == "RAVE") {
//     textBg.innerHTML = "OR"
//   } else if (textBg.innerHTML == "OR") {
//     textBg.innerHTML = "DIE"
//   } else if (textBg.innerHTML == "DIE") {
//     textBg.innerHTML = "RAVE"
//   };
// }

// function changeBackground() {
//   changeBackgroundColor();
//   changeBackgroundText();
// }

// // Run this function every 300ms
// setInterval(changeBackground, 300);

// const mice = document.getElementById('cat')
// querySelector trae la primer coincidencia
const caat = document.querySelector('#cat')
// querySelectorAll trae todas las coincidencias
const mice = document.querySelectorAll('.mouse')
const mouse1 = document.querySelector('.mouse')
console.log(mouse1)

mice.forEach(mouse => {
  mouse.innerText = 'mouse'
  mouse.className += ' mice'
  // Object.assign(mouse.style, catStyles)
})

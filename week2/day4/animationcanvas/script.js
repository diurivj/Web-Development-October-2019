const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
// estado (las variables que afectan el funcionamiento de mi programa)
// let speed1 = 1
// let speed2 = 2
// let speed3 = 3

// ctx.fillRect(100, 10, 50, 50)
// ctx.fillRect(200, 10, 50, 50)
// ctx.fillRect(300, 10, 50, 50)

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

// function updateCanvas() {
//   // Se encarga de animar el programa
//   // 1. realizar cambios al estado
//   speed1 += 1
//   speed2 += 2
//   speed3 += 3
//   //2. limpiar canvas
//   clearCanvas()
//   //3. Repintar los elementos
//   ctx.fillRect(100, speed1, 50, 50)
//   ctx.fillRect(200, speed2, 50, 50)
//   ctx.fillRect(300, speed3, 50, 50)

//   requestAnimationFrame(updateCanvas)
// }

// requestAnimationFrame(updateCanvas)

// function updateCanvas() {
//   // Se encarga de animar el programa
//   // 1. realizar cambios al estado
//   speed1 += 1
//   speed2 += 2
//   speed3 += 3
//   //2. limpiar canvas
//   clearCanvas()
//   //3. Repintar los elementos
//   ctx.fillRect(100, speed1, 50, 50)
//   ctx.fillRect(200, speed2, 50, 50)
//   ctx.fillRect(300, speed3, 50, 50)
// }

var ghost = {
  x: 25,
  y: 25,
  moveUp: function() {
    this.y -= 25
  },
  moveDown: function() {
    this.y += 25
  },
  moveLeft: function() {
    this.x -= 25
  },
  moveRight: function() {
    this.x += 25
  }
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      ghost.moveUp()
      console.log('up', ghost)
      break
    case 40:
      ghost.moveDown()
      console.log('down', ghost)
      break
    case 37:
      ghost.moveLeft()
      console.log('left', ghost)
      break
    case 39:
      ghost.moveRight()
      console.log('right', ghost)
      break
  }
  updateCanvas()
}

function draw(ghost) {
  var img = new Image()
  img.onload = function() {
    ctx.drawImage(img, ghost.x, ghost.y, 50, 50)
  }
  img.src = 'https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif'
}

function updateCanvas() {
  clearCanvas()
  draw(ghost)
}

setInterval(updateCanvas, 1000 / 60)

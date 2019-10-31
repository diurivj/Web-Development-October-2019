document.onkeydown = e => {
  switch (e.keyCode) {
    case 37:
      flash.moveLeft()
      return
    case 39:
      flash.moveRight()
      return
    case 38:
      flash.jump()
      return
  }
}

document.onkeyup = e => {
  flash.vx = 0
  flash.position = 0
}

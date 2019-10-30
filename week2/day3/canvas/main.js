// 1. Sujetamos nuestro lienzo,
const canvas = document.querySelector('canvas');
// 2. Nuestro pincelin
const ctx = canvas.getContext('2d');

// fillRect - figura Rellena
// strokeRect - figura sin Relleno
//ctx.font = '24px Arial';
//ctx.fillText('Este es el logo de Windows', 200, 100);
ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 100, 100);
ctx.fillStyle = 'green';
ctx.fillRect(100, 0, 100, 100);
ctx.fillStyle = 'blue';
ctx.fillRect(0, 100, 100, 100);
ctx.fillStyle = 'yellow';
ctx.fillRect(100, 100, 100, 100);
ctx.lineWidth = '1';
ctx.beginPath();
ctx.fillStyle = 'peru';
ctx.moveTo(250, 0);
ctx.lineTo(300, 100);
ctx.lineTo(200, 100);
ctx.lineTo(250, 0);
ctx.fill();
ctx.closePath();
ctx.beginPath();
ctx.arc(250, 150, 50, 0, 2 * Math.PI, true);
ctx.stroke();
ctx.closePath();

//const img = new Image();
//img.src = 'https://wallpaperaccess.com/full/697607.jpg'
//img.onload = () => {
// 1. la imagen
// 2. a partir de donde quieres que corte la imagen en x
// 3. a partir de donde quieres que corte la imagen en y
// 4. a partir de donde le dijiste en x, cuanto corto
// 5. a partir de donde le dijiste en y, cuanto corto
// 6. donde en el canvas, en x quiero que lo ponga
// 7. donde en el canvas, en y quiero que lo ponga
// 8. cuanto quiero que mida en x
// 9. cuanto quiero que mida en y

// si solo pones 3 parametros,
// img, x, y

// si solo pones 5 params,
// img, x, y, width, height

// si solo pones 7 params, va a fallar
// si pones los 9, el orden esta arriba, ve a verlo, si no entiendes, https://www.w3schools.com/tags/canvas_drawimage.asp
//ctx.drawImage(img, 20, 0, canvas.width, canvas.height)
//ctx.drawImage(img, 1600, 0, 500, 500, 100, 0, 200, 200)
//}

ctx.clearRect(0, 0, canvas.width, canvas.height);

let i = 0;
setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(i, 0, 100, 100);
  if (i === 800) {
    i = 0;
  } else {
    i += 100;
  }
  // framespersecond
}, 1000 / 120);

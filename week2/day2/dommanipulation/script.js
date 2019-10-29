let paragraph = document.querySelector('#paragraph')

// console.log(paragraph)

const link = document.querySelectorAll('.link')
const divs = document.querySelectorAll('div')

// console.log(link[0].getAttribute('href'))
link[0].setAttribute('href', 'http://google.com')
link[0].setAttribute('target', '__blank')

link[0].removeAttribute('target')

const h2Text = document.createTextNode('Quien viene disfrazado ?')

const h2 = document.createElement('h2')

const h1 = document.createElement('h1')

const body = document.querySelector('body')

h2.appendChild(h2Text)

console.log(h2)
h1.innerHTML = 'Ironhalloween'
body.appendChild(h2)

body.insertBefore(h1, h2)
body.removeChild(paragraph)

const button = document.querySelector('#add-item-button')
const list = document.querySelector('#item-list')

const itemInput = document.querySelector('#item')

button.onclick = function() {
  const liElement = document.createElement('li')
  liElement.innerText = `${itemInput.value}`
  liElement.onclick = function(event) {
    list.removeChild(event.target)
  }
  itemInput.value = ''
  list.appendChild(liElement)
}

window.onbeforeunload = function() {
  return 'Do you really want to close?'
}

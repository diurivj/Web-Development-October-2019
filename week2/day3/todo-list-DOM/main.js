const todo = document.querySelector('input[name="add"]');
const button = document.querySelector('input[type="submit"]');
const list = document.querySelector('ul');

function addTodo() {
  const { value } = todo;
  const li = document.createElement('li');
  li.innerText = value;
  list.append(li);
  todo.value = '';
}
// Estamos deconstruyendo target del evento

// Estilo Platzi
// function remove(event) {
//   const li = event.target
// }

// Estilo Ironhack
// function remove(e) {
//   const { target } = e
//   list.removeChild(target);
// }

// Estilo Ironhacker Ye
function remove({ target }) {
  if (target.style.textDecoration === 'line-through') {
    list.removeChild(target);
  } else {
    target.style.textDecoration = 'line-through';
  }
}

button.addEventListener('click', addTodo);
list.addEventListener('click', remove);

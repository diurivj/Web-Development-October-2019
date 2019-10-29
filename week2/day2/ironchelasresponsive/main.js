const responsiveNav = document.querySelector('#responsive-nav')
const amborguesa = document.querySelector('#amborguesa')

amborguesa.onclick = () => {
  if (responsiveNav.className === 'active') {
    responsiveNav.className = 'inactive'
  } else {
    responsiveNav.className = 'active'
  }
}

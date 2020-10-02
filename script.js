
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarContent = document.getElementsByClassName('navbar-content')[0]

toggleButton.addEventListener('click', () => {
  navbarContent.classList.toggle('active')
})


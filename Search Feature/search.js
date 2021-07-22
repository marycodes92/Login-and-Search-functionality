const icon = document.querySelector('.icon')
const search = document.querySelector('.search')
const clear = document.querySelector('.clear')
const mySearch = document.getElementById('search')

// icon.onclick = () => {
//   search.classList.add('active')
// }

icon.addEventListener('click', (e) => {
  search.classList.toggle('active')
  alert('This is the result of your search')
})

clear.addEventListener('click', (e) => {
  mySearch.value = ''
})

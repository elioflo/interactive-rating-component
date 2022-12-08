const form = document.getElementById('form')
const rating = document.getElementsByClassName('rating')[0]
const thanks = document.getElementsByClassName('thanks')[0]
const scoreText = thanks.getElementsByClassName('thanks__score')[0]

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const data = new FormData(form)
  scoreText.textContent = `You selected ${data.get('score')} out of 5`
  rating.style.display = 'none'
  thanks.style.display = 'flex'
})

document
  .getElementsByClassName('rating__button')[0]
  .addEventListener('click', (event) => {
    event.preventDefault()
    const form = document.getElementsByClassName('rating')[0]
    const formData = new FormData(form)
    document.getElementsByClassName('thanks__score')[0].textContent = `You selected ${formData.get('score')} out of 5`
    form.style.display = 'none'
    document.getElementsByClassName('thanks')[0].style.display = 'flex'
  })

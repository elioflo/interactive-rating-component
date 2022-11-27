let selected = undefined

function selectButton(button) {
    if(selected){
        selected.classList.remove('rating__score--selected')
    }
    button.classList.add('rating__score--selected')
    selected = button
}

Array.from(document.getElementsByClassName('rating__score')).forEach(button => {
    button.addEventListener('click',()=>{selectButton(button)})
})

function thanks(){
    if(selected){
        document.getElementsByClassName('thanks__score')[0].textContent = `You selected ${selected.textContent} out of 5`
        document.getElementsByClassName('rating')[0].style.display = "none"
        document.getElementsByClassName('thanks')[0].style.display = "flex"
    }
}

document.getElementsByClassName('rating__button')[0].addEventListener('click',()=>{thanks()})


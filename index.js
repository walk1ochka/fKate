const form = document.querySelector('.form')
form.addEventListener('submit',e=>{
    e.preventDefault()
    const input = document.querySelector('#mainInput')
    if (input.value == 14+27+29) {
        window.location.href = 'message.html'
    } else{
        const error = document.querySelector('.form__item-error')
        error.style.display = 'block'
    }

})
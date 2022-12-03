const btnIncrement = document.querySelector('.increment')
const btnDecrement = document.querySelector('.decrement')
const btnReset = document.querySelector('.reset')
const countDisplay = document.querySelector('.count')

let current = 0

function incrementCount() {
    current++
    countDisplay.textContent = current
}

function decrementCount() {
    current--
    countDisplay.textContent = current
}

function resetCount() {
    current = 0
    countDisplay.textContent = current
}

btnDecrement.addEventListener('click', decrementCount)
btnIncrement.addEventListener('click', incrementCount)
btnReset.addEventListener('click', resetCount)

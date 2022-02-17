const board = document.querySelector('#board')
const SQUARS_COUNT = 555
const colors = ['#B3FF7A', '#23A8FF', '#FF95C0', '#B75FFF', '#FF7C44', '#B6FF37', '#FCFFB0']

for (let I = 0; I < SQUARS_COUNT; I++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)


    board.append(square)
}

function setColor (e) {
    const element = e.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor (e) {
    const element = e.target
    element.style.backgroundColor = `#1d1d1d`
    element.style.boxShadow = `0 0 #000`
}

function getRandomColor () {
    return colors[Math.floor(Math.random() * colors.length)]
}
const textArea = document.querySelector('#textarea')
const choicesContainer = document.querySelector('#choices')


function main() {
    textArea.addEventListener('keyup', (event) => {
        if(event.key == 'Enter') {
            return pickRandomChoice()
        }
        const choices = textArea.value.split(',').filter(c => c.trim().length > 0)
        choicesContainer.innerHTML = ''
        for(let choice of choices) {
            const span = document.createElement('span')
            span.classList.add('choice')
            span.innerText = choice
            choicesContainer.appendChild(span)
        }
    })
}

function pickRandomChoice() {
    const numberOfHighlighting = 30
    clearHighlighted()
    const interval = setInterval(() => {
        const randomChoice = getRandomChoice()
        highlightRandomChoice(randomChoice)
        unhighlightRandomChoice(randomChoice)
    }, 100)

    setTimeout(() => {
        clearInterval(interval)
        const randomChoice = getRandomChoice()
        setTimeout(() => {
            highlightRandomChoice(randomChoice)
        }, 100)
    }, numberOfHighlighting * 100)
}

function getRandomChoice() {
    const choices = document.querySelectorAll('.choice')
    return choices[Math.floor(Math.random() * choices.length)]
}

function highlightRandomChoice(choiceEl) {
    choiceEl.classList.add('highlight')
}

function unhighlightRandomChoice(choiceEl) {
    setTimeout(() => {
        choiceEl.classList.remove('highlight')
    }, 100)
}

function clearHighlighted() {
    const choices = document.querySelectorAll('.choice')
    choices.forEach(choice => choice.classList.remove('highlight'))
}

main()
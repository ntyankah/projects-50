const labels = document.querySelectorAll('.label')

function main() {
    labels.forEach((label) => {
        const letters = label.innerText.split('')
        console.log('letters: ', letters)
        label.innerHTML = ''
        for(let i = 0; i < letters.length; i++) {
            const letter = letters[i]
            const span = document.createElement('span')
            span.textContent = letter
            span.style.transitionDelay = `${i * 50}ms`
            label.appendChild(span)
        }
    })
}

main()
const buttons = document.querySelectorAll('.form-control button')

function main() {
    addHandlerToExpandInput()
}

function addHandlerToExpandInput() {
    for(let button of buttons) {
        const formControl = button.closest('.form-control')
        button.addEventListener('click', () => {
            if(Array.from(formControl.classList).includes('expanded')) {
                formControl.classList.remove('expanded')
            } else {
                formControl.classList.add('expanded')
            }
        })
    }
}

main()
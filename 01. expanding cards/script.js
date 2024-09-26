const panels = document.querySelectorAll('.panel')

for (let panel of panels) {
    panel.addEventListener('click', () => {
        removePreviousActiveClass(panels)
        panel.classList.add('active')
    })
}

function removePreviousActiveClass(panels) {
    for (let panel of panels) {
        panel.classList.remove('active')
    }
}
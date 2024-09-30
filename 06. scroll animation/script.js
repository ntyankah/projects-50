const boxes = document.querySelectorAll('.box')

function main() {
    window.addEventListener('scroll', slideContentIn)
    slideContentIn()
}

function slideContentIn() {
    const treshHold = (window.innerHeight / 5) * 4
    for(let box of boxes) {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < treshHold) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    }
}

main()
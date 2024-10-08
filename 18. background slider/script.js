const leftBtn = document.querySelector('#left-btn')
const rightBtn = document.querySelector('#right-btn')
const images = document.querySelectorAll('.img')
const background = document.querySelector('.container')

let activeImageIdx = 0;

function main() {
    rightBtn.addEventListener('click', () => {
        activeImageIdx += 1
        if (activeImageIdx == images.length) {
            activeImageIdx = 0
        }
        setActiveImage()
    })

    leftBtn.addEventListener('click', () => {
        activeImageIdx -= 1
        if (activeImageIdx < 0) {
            activeImageIdx = images.length - 1
        }
        setActiveImage()
    })
}

function setActiveImage() {
    images.forEach(img => img.classList.remove('show'))
    const activeImage = images[activeImageIdx]
    activeImage.classList.add('show')
    background.style.backgroundImage = `url('${activeImage.src}')`
}

main()
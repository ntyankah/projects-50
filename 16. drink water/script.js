const smallCups = document.querySelectorAll('.small')
const remainingBox = document.querySelector('.remaining')
const consumedBox = document.querySelector('.consumed')
const consumedLabel = document.querySelector('#consumed-label')
const remainingLabel = document.querySelector('#remaining-label')
let prev = -1

function main() {
    smallCups.forEach((cup, idx) => {
        cup.addEventListener('click', () => {
            let targetIdx = idx;
            if(prev == idx) {
                targetIdx -= 1
                prev = -1
            } else {
                prev = idx
            }
            for(let i = 0; i < smallCups.length; i++) {
                if(i <= targetIdx) {
                    smallCups[i].classList.add('selected')
                } else {
                    smallCups[i].classList.remove('selected')
                }
            }

            adjustHeights()
        })
    })
}

function adjustHeights() {
    const highlightedCups = document.querySelectorAll('.selected')
    const allCupsCount = smallCups.length
    const selectedCount = highlightedCups.length
    const consumedHeight = ((selectedCount / allCupsCount) * 100)
    const remainingHeight = 100 - consumedHeight;
    const remainingLitres = 2 - ((selectedCount / allCupsCount) * 2);
    consumedBox.style.height = `${consumedHeight}%`
    remainingBox.style.height = `${remainingHeight}%`
    consumedLabel.innerText = `${consumedHeight}%`
    remainingLabel.innerText = `${remainingLitres}L`

}

main()
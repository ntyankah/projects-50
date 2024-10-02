const openToggles = document.querySelectorAll('.expand')
const closeToggles = document.querySelectorAll('.close')

function main() {
    for(let open of openToggles) {
        open.addEventListener('click', () => {
            const faq = open.closest('.faq')
            faq.classList.toggle('active')
        })
    } 

    for(let close of closeToggles) {
        close.addEventListener('click', () => {
            const faq = close.closest('.faq')
            faq.classList.toggle('active')
        })
    }
}


main()
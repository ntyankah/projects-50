const  content = document.querySelector('.content')
const ps5 = document.querySelector('.ps-5')
const xbox = document.querySelector('.xbox')

function main() {
    ps5.addEventListener('mouseenter', () => {
        content.classList.add('hover-left')
        console.log('in hover left')
    })
    ps5.addEventListener('mouseleave', () => {
        content.classList.remove('hover-left')
        console.log('leave hover left')
    })
    xbox.addEventListener('mouseenter', () => {
        content.classList.add('hover-right')
        console.log('in hover right')
    })
    xbox.addEventListener('mouseleave', () => {
        content.classList.remove('hover-right')
        console.log('leave hover right')
    })
}

main()
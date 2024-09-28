const body = document.querySelector('#body')
const navItems = document.querySelectorAll('.nav li')
const closeBtn = document.querySelector('#close')
const openBtn = document.querySelector('#bars')

function main() {
    addDynamicMarginsToNavItems()
    addRotationTriggerHandlers()
}

function addRotationTriggerHandlers() {
    closeBtn.addEventListener('click', () => {
        body.classList.remove('rotate')
    })

    openBtn.addEventListener('click', () => {
        body.classList.add('rotate')
    })
}

function addDynamicMarginsToNavItems() {
    for(let i = 0; i < navItems.length; i++) {
        const item = navItems[i]
        item.style.marginLeft = `${i * 20}px`
    }
}

main()
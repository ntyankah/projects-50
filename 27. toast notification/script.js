const triggerBtn = document.querySelector('.btn')
const toastsContainer = document.querySelector('.toasts-container')

const REMOVETIME = 5000;
const colors = ['red', 'yellow', 'green', 'blue', 'black', 'gray']
const notifications = ['hello', 'world', 'welcome', 'youtube', 'channel']

function main() {
    triggerBtn.addEventListener('click', addRandomToast)
}

function addRandomToast() {
    const randomText = notifications[Math.floor(Math.random() * notifications.length)]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    const toastEl = document.createElement('div')
    toastEl.classList.add('toast')
    toastEl.style.color = randomColor
    toastEl.innerText = randomText

    toastsContainer.appendChild(toastEl)
    setTimeout(() => toastEl.remove(), REMOVETIME)
}

main()
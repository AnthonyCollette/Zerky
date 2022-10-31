let btn = document.getElementById('btn')
let badBtn = document.getElementById('bad-btn')
let surprise = document.getElementById('surprise')
let badSurprise = document.getElementById('bad-surprise')
let cringe = document.getElementById('cringe')
let badCringe = document.getElementById('bad-cringe')
let title = document.getElementById('h1')
let badTitle = document.getElementById('h2')
let poop = document.getElementById('poop')

btn.addEventListener('click', () => {
    surprise.classList.add('appears')
    cringe.classList.add('scale-up')
    title.classList.add('opacity')
})

badBtn.addEventListener('click', () => {
    badSurprise.classList.add('appears')
    badCringe.classList.add('scale-up')
    badTitle.classList.add('opacity')
    poop.classList.add('scale-medium')
})


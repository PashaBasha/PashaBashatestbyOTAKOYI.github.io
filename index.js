let menu = document.getElementsByClassName('humburgerMenu')
let a = document.getElementById("aMenu")
let iconfilters = document.getElementById('iconfilters')
let iputBlock = document.getElementById('inputBlock')
let buyButton = document.getElementsByClassName('buyButton')
let openWindow = document.getElementById('openWindow')
let closeModalWindow = document.getElementById('closeModalWindow')



for (i = 0; i < buyButton.length; i++) {

    buyButton[i].addEventListener('click', function () {

        openWindow.style.display = 'block'

    })
}

closeModalWindow.addEventListener('click', function () {
    openWindow.style.display = 'none'
})

iconfilters.addEventListener('click', function () {
    if (inputBlock.style.display == 'none') {
        inputBlock.style.display = 'block'
    }
    else {
        inputBlock.style.display = 'none'
    }


})

a.addEventListener('click', function () {
    let smallNav = document.getElementById('smallNav')

    if (a.innerHTML == '☰') {
        a.innerHTML = '✖'
        smallNav.style.display = 'block'
    }
    else {
        smallNav.style.display = 'none'
        a.innerHTML = '☰'
    }


})


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)

    if (blockID.length > 0) {
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    
  })
}

let header__burger = document.querySelector('.toggle_button');
let header_menu = document.querySelector('.top-menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.top-menu');

header__burger.onclick = function(){
  header__burger.classList.toggle('active');
  header_menu.classList.toggle('active');
  back.classList.toggle('lock');
}

header__list.onclick = function () {
  header__list.classList.remove('active');
  back.classList.toggle('lock');
}
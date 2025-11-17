const menuIcon = document.getElementById('open-menu-btn')
const navSection = document.getElementById('nav-list')
const navItens = document.getElementsByClassName('nav-itens')
    menuIcon.addEventListener('click', () => {  
            navSection.style.animation = 'openMenu 0.5s ease-in-out forwards'
            menuicon.style.marginRight = '200px' 
    })

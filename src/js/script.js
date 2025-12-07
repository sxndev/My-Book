const myObserver = new IntersectionObserver( (elements) =>{
    elements.forEach((element) => {
        if(element.isIntersecting){
            element.target.classList.add('show')
        } else{
            element.target.classList.remove('show')
        } 
    })
} )

const sections = document.querySelectorAll('.hidden') 
sections.forEach((element) => myObserver.observe(element));  

const observeList = new IntersectionObserver((el) => {
    el.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('in-screen') 
        } else{
            element.target.classList.remove('in-screen')
        }
    }) 
})
const listItens = document.querySelectorAll('.enter-screen');
listItens.forEach((el) => observeList.observe(el))       
 
const navList = document.getElementById('nav-list');

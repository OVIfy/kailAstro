const navBtn = document.querySelector('.nav-btn')
const navBtnOpen = document.querySelector('.nav-btnOpen')
const navMobileMenu = document.querySelector('.nav-menu')
const closenavBtn = document.querySelector('.nav-btnClose')

const modalOpeners = document.querySelectorAll('.modal-open')
const modals = document.querySelectorAll('.modal')
const backdrop = document.querySelector('.backdrop')
const modalClosers = document.querySelectorAll('.close-modal-btn')




console.log(backdrop)

navBtn.addEventListener('click',(e)=> {navMobileMenu.style.display = 'block'; navBtnOpen.style.display = 'none'})

closenavBtn.addEventListener('click', (e)=> {navMobileMenu.style.display = 'none'; navBtnOpen.style.display = 'block'})

modalOpeners.forEach((ele, i) => ele.addEventListener('click', e => {
    modals[i].style.display = 'block'
    backdrop.style.display = 'flex'
    modals[i].classList.remove('slideOutModal')
    modals[i].classList.add('slideInModal')
}))

modalClosers.forEach((ele, i)=> ele.addEventListener('click', e => {
    modals[i].classList.remove('slideInModal')
    modals[i].classList.add('slideOutModal')
    setTimeout(()=>{
        backdrop.style.display = 'none'
        modals[i].style.display = 'none'    
    },1000)

}))
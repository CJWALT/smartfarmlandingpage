const menu = document.getElementById('nav-menu'); 
const nav = document.querySelector('.nav-bar')


const toggleNav = () =>{

    nav.classList.toggle('show-nav')



}

menu.addEventListener('click', toggleNav, false)
import './style.css';
import Home from './home';
import Menu from './menu';

let home = Home();
let menu = Menu ();
//cache
const content = document.querySelector('#content');
const homeTab = document.querySelector('.home');
const menuTab = document.querySelector('.menu');
const contactTab = document.querySelector('.contact');
const navBar = Array.from(document.querySelectorAll('.nav-bar li'));
console.log(navBar);


const clear = () => {
    content.innerHTML = '';
}

const renderHome = () =>{
    clear();
    unselectNavBar();
    homeTab.classList.add('selected');
    content.appendChild(home.renderAll());
}

const renderMenu = () =>{
    clear();
    unselectNavBar();
    menuTab.classList.add('selected');
    content.appendChild(menu.renderAll());
}

const unselectNavBar= () => {
    navBar.forEach( navLi => navLi.classList.remove('selected'));
}


homeTab.addEventListener('click', renderHome);
menuTab.addEventListener('click', renderMenu);


//add navBar 'selected', and clear whatever was selected before









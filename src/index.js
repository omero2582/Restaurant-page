import './style.css';
import Home from './home';
import Menu from './menu';
import Contact from './contact';

let home = Home();
let menu = Menu ();
let contact = Contact();
//cache
const content = document.querySelector('#content');
const homeTab = document.querySelector('.home-tab');
const menuTab = document.querySelector('.menu-tab');
const contactTab = document.querySelector('.contact-tab');
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

const renderContact = () =>{
    clear();
    unselectNavBar();
    contactTab.classList.add('selected');
    content.appendChild(contact.renderAll());
}

const unselectNavBar= () => {
    navBar.forEach( navLi => navLi.classList.remove('selected'));
}


homeTab.addEventListener('click', renderHome);
menuTab.addEventListener('click', renderMenu);
contactTab.addEventListener('click', renderContact);

renderHome();


//add navBar 'selected', and clear whatever was selected before









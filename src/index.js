import menuTpl from './templates/menu.hbs';
import menu from './menu.json';


// ====== Заполнение меню ======

const galleryUl = document.querySelector('.js-menu');

galleryUl.insertAdjacentHTML('beforeend', createMenu(menu));

function createMenu(menu) {
    return menuTpl(menu);
};


// ====== Переключатель темы ======

const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme'
}
const inputRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

defaultTheme();

inputRef.addEventListener('change', onThemeSwitcChange);

function onThemeSwitcChange() {
    if (inputRef.checked) {
        bodyRef.classList.add(theme.DARK);
        bodyRef.classList.remove(theme.LIGHT);
        localStorage.setItem('theme', theme.DARK);
    } else {
        bodyRef.classList.remove(theme.DARK);
        bodyRef.classList.add(theme.LIGHT);
        localStorage.setItem('theme', theme.LIGHT);
    }
};

function defaultTheme() {
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', theme.LIGHT);
    } else {
        bodyRef.classList.add(localStorage.getItem('theme'));
    };    

    if (localStorage.getItem('theme') === theme.DARK) {
       inputRef.checked = true; 
    };
}

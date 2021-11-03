import './styles.css'

// Counter State providing

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');

let state = 0; 

function pageRender() {
    counter.innerHTML = state;
//    counter.textContent = state.toString(); it is also true;
}

addBtn.addEventListener('click', () => {
    state++;
    pageRender();
})

subBtn.addEventListener('click', () => {
    state--;
    pageRender();
})

asyncBtn.addEventListener('click', () => {
    setTimeout(() => {
        ++state
        state++
        pageRender()
    }, 3000)
})


pageRender();






// Change theme functionality
const theme = document.querySelector('#theme');
function changeTheme() {
   document.body.classList.toggle('dark');
}
theme.addEventListener('click', changeTheme);

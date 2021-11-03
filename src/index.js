import { createStore } from './createStore';
import { rootReducer } from './redux/rootReducer';
import './styles.css'

const counter = document.querySelector('#counter');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const theme = document.querySelector('#theme');

const store = createStore(rootReducer, 0);


addBtn.addEventListener('click', () => {
    store.dispatch({type: "INCREMENT"})
})

subBtn.addEventListener('click', () => {
    store.dispatch({type: "DECREMENT"})
})

asyncBtn.addEventListener('click', () => {

})

store.subscribe(() => {
    const state = store.getState();
    counter.textContent = state;
})
store.dispatch({type: "INITIAL"})



theme.addEventListener('click', () => {
   
});

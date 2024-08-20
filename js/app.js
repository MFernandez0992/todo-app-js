const addBtn = document.querySelector('button');
const inputField = document.querySelector('#input-box');
const ulList = document.querySelector('#list-container');
const newTask = document.createElement('li');

const tasksList = ['Hola'];

const addTask = () => {

    if( inputField.value === '' ){
        alert('You must write something!');
    } else {
        newTask.innerHTML = inputField.value;
        ulList.appendChild( newTask );

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        newTask.append( span );
        saveData();
    }

    inputField.value = '';
    
}

ulList.addEventListener('click', event => {
    if( event.target.tagName === 'LI' ){
        event.target.classList.toggle('checked');
        saveData();
    } else if( event.target.tagName === 'SPAN' ){
        event.target.parentElement.remove();
        saveData();
    }
}, false );

const saveData = () => {
    localStorage.setItem('data', ulList.innerHTML )
}

const getData = () => {
    ulList.innerHTML = localStorage.getItem('data');
}

getData();
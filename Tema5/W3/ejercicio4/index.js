let groceryList = document.getElementById('groceryList');
let submit = document.getElementById('submit');
let clearItems = document.getElementById('clear');
let input = document.getElementById('grocery');
let form = document.getElementById('form');
let deleteButtons = document.getElementsByClassName('delete');
let editButtons = document.getElementsByClassName('edit');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let value = input.value;

    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = value;
    groceryList.appendChild(li);
    li.appendChild(span);
    input.value = '';

    // Se definen los botones de borrar y editar
    let deleteButton = document.createElement('button');
    let editButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    editButton.innerHTML = 'Edit';
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    deleteButton.className = 'delete';
    editButton.className = 'edit';

    // Cada vez que se pulsa el boton borra ese objeto de la lista
    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', (e) => {
            let li = e.target.parentElement;
            li.parentElement.removeChild(li);
        });
    }

    // Cada vez que se pulsa el boton editar aparece una alerta donde
    // pide el nuevo valor del objeto
    for(let i = 0; i < editButtons.length; i++) {
        editButtons[i].addEventListener('click', (e) => {
            let userValue = prompt('Enter new value');
            let li = e.target.parentElement;
            let span = li.firstElementChild;
            span.textContent = userValue;
        });
    }
});

// Cada vez que se pulsa el boton clear se borra toda la lista
clearItems.addEventListener('click', () => {
    while(groceryList.firstChild) {
        groceryList.removeChild(groceryList.lastChild);
    }
});
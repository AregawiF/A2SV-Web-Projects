const addButton = document.querySelector('#addButton');
const inputField = document.querySelector('#inputField');
const taskList = document.querySelector('#taskList');


function createTask(text) {
    const newRow = document.createElement('div');
    const newSpan = document.createElement('span');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    const buttonContainer = document.createElement("div");
    
    newSpan.textContent = text;
    newSpan.id = 'textSpan';
    
    editButton.textContent = 'Edit';
    editButton.id = 'editButton';
    
    deleteButton.textContent = 'Delete';
    deleteButton.id = 'deleteButton';

    buttonContainer.className = "button-container";
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    
    newRow.className = 'row';
    newRow.appendChild(newSpan);
    newRow.appendChild(buttonContainer);
    
    taskList.appendChild(newRow);
    inputField.value = '';

    deleteButton.onclick = () =>{
        taskList.removeChild(newRow);
    }

    editButton.onclick = () =>{
        const editText = prompt('Edit task');
        if (editText.trim()) {
            newSpan.textContent = editText;
        }
    }
}

addButton.onclick = () => {
    const taskText = inputField.value;
    if (taskText) {
        createTask(taskText);
    }
};
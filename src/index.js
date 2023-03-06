const sidePanel = document.querySelector('.sidePanel');
const mainPanel = document.querySelector('.mainPanel');

function todo(title, description, dueDate, priority, notes, project = 'main') {
    function setProject(newProj) {
        project = newProj;
    }

    return {title, description, dueDate, priority, notes};
}

function displayTodo(todo) {
    let element = document.createElement('div');
    let title = document.createElement('p');
    title.innerText = todo.title;
    let description = document.createElement('p');
    description.innerText = todo.description;
    let dueDate = document.createElement('p');
    dueDate.innerText = todo.dueDate;
    let priority = document.createElement('p');
    priority.innerText = todo.priority;
    let notes = document.createElement('p');
    notes.innerText = todo.notes;

    element.append(title, description, dueDate, priority, notes);

    mainPanel.appendChild(element);
    console.log(element);
}

displayTodo(todo('aa', 'aasdadsadad', 'asdasdasd', 'high', 'notestnotestnotes'));
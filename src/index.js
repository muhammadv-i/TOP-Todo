const sidePanel = document.querySelector('.sidePanel');
const mainPanel = document.querySelector('.mainPanel');

function todo(title, description, dueDate, priority, notes, project = 'main') {
    let _title = title,
        _desc = description,
        _dueDate = dueDate,
        _priority = priority,
        _notes = notes,
        _project = project;
        
        function setTitle(newTitle) { _title = newTitle; }
        function getTitle() { return _title; }
    
        function setDesc(newDesc) { _desc = newDesc; }
        function getDesc() { return _desc; }

        function setDueDate(newDate) { _dueDate = newDate; }
        function getDueDate() { return _dueDate; }

        function setPriority(newPriority) { _priority = newPriority; }
        function getPriority() { return _priority; }

        function setNotes(newNotes) { _notes = newNotes; }
        function getNotes() { return _notes; }
        
        function setProject(newProj) { _project = newProj; }
        function getProject() { return _project; }
        
        let obj = {
            setTitle, 
            getTitle, 
            setDesc,
            getDesc,
            setDueDate,
            getDueDate,
            setPriority,
            getPriority,
            setNotes,
            getNotes,
            setProject,
            getProject,
        };

        displayTodo(obj);

    return obj;
}

function displayTodo(todo) {
    let element = document.createElement('div');
    element.classList.add('todo');
    element.dataset.project = todo.getProject();

    let title = document.createElement('p');
    title.classList.add('title')
    title.innerText = todo.getTitle();

    let description = document.createElement('p');
    description.classList.add('description')
    description.innerText = todo.getDesc();

    let dueDate = document.createElement('p');
    dueDate.classList.add('dueDate')
    dueDate.innerText = todo.getDueDate();

    let priority = document.createElement('p');
    priority.classList.add('priority')
    priority.innerText = todo.getPriority();

    let notes = document.createElement('p');
    notes.classList.add('notes')
    notes.innerText = todo.getNotes();

    let project = document.createElement('p');
    project.classList.add('project')
    project.innerText = todo.getProject();


    element.append(title, description, dueDate, priority, notes, project);

    mainPanel.appendChild(element);
}

todo('asasd', 'ads', new Date(), '132', '214124ass asdasd');
todo('title', 'description', new Date(), 'priority', 'notes');
todo('title', 'description', new Date(), 'priority', 'notes');
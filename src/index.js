import { format, formatDistance } from 'date-fns';

const sidePanel = document.querySelector('.sidePanel');
const mainPanel = document.querySelector('.mainPanel');

function todo(title, description, dueDate, priority, notes, project = 'main') {
    let _title = title,
        _desc = description,
        _dueDate = dueDate,
        _priority = priority,
        _notes = notes,
        _project = project,
        _createdOn = new Date();

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

        function getCreatedOn() { return _createdOn; }
        
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
            getCreatedOn,
        };

        displayTodo(obj);

    return obj;
}

function displayTodo(todo) {
    let element = document.createElement('div');
    element.classList.add('todo');
    element.dataset.project = todo.getProject();
    element.dataset.priority = todo.getPriority();

    let title = document.createElement('p');
    title.classList.add('title')
    title.innerText = todo.getTitle();

    let description = document.createElement('p');
    description.classList.add('description')
    description.innerText = todo.getDesc();

    let dueDate = document.createElement('p');
    dueDate.classList.add('dueDate')
    dueDate.innerText = `Due on ${format(todo.getDueDate(), 'dd/MM/yyyy')}`;

    let priority = document.createElement('p');
    priority.classList.add('priority')
    priority.innerText = element.dataset.priority;

    let notes = document.createElement('p');
    notes.classList.add('notes')
    notes.innerText = todo.getNotes();

    let project = document.createElement('p');
    project.classList.add('project')
    project.innerText = element.dataset.project;

    let createdOn = document.createElement('p');
    createdOn.innerText = formatDistance(todo.getCreatedOn(), new Date(), { addSuffix: true });
    createdOn.classList.add('createdOn');
    

    element.append(title, description, dueDate, priority, notes, project, createdOn);
    Array.from(element.children).forEach( child => edit(child));

    let g1 = document.createElement('div');
    g1.classList.add('top-line');

    let subg1 = document.createElement('div');
    subg1.append(title, project)
    let subg2 = document.createElement('div');
    subg2.append(priority, createdOn);

    g1.append(subg1, subg2);

    element.insertBefore(g1, element.children[0]);
    

    mainPanel.appendChild(element);
}

function edit(field) {
    let parent = field.parentElement;
    field.dataset.isEditing = 'false';

    field.addEventListener("click", (e) => {
        if (field.dataset.isEditing === 'false') {
            field.dataset.isEditing = 'true';
            let editor;
            
            if (field.classList[0] === 'description') {
                editor = document.createElement('textarea');
            }
            else {
                editor = document.createElement('input');
                editor.type = 'text'; 
            }

            editor.value = field.innerText;
            editor.classList.add(...field.classList);
            
            field.classList.toggle('hidden');
            parent.insertBefore(editor, field);

            editor.addEventListener('keydown', (e) => {
                if (e.code === 'Enter') {
                    field.innerText = editor.value;
                    field.classList.toggle('hidden'); 
                    field.dataset.isEditing = 'false';
                    editor.remove();
                }
            })
        }
    })

}

todo('Date-fns', `The characters wrapped between two single quotes characters (') are escaped. Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote. (see the last example)`, new Date(2026, 1, 1), 'High', '214124ass asdasd');
todo('title', 'description', new Date(), 'priority', 'notes');
todo('title', 'description', new Date(), 'priority', 'notes');
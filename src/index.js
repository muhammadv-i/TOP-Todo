import { format, formatDistance, parseISO } from 'date-fns';

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

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let title = document.createElement('p');
    title.classList.add('title')
    title.innerText = todo.getTitle();
    title.dataset.editable = 'true';

    let description = document.createElement('p');
    description.classList.add('description')
    description.innerText = todo.getDesc();
    description.dataset.editable = 'true';

    let dueDate = document.createElement('p');
    dueDate.classList.add('dueDate')
    dueDate.innerText = `Due ${format(todo.getDueDate(), 'dd/MM/yyyy')}`;
    dueDate.dataset.editable = 'true';

    let priority = document.createElement('p');
    priority.classList.add('priority')
    priority.innerText = element.dataset.priority;
    priority.dataset.editable = 'true';

    let notes = document.createElement('p');
    notes.classList.add('notes')
    notes.innerText = todo.getNotes();
    notes.dataset.editable = 'true';

    let project = document.createElement('p');
    project.classList.add('project')
    project.innerText = element.dataset.project;
    project.dataset.editable = 'true';

    let createdOn = document.createElement('p');
    createdOn.innerText = formatDistance(todo.getCreatedOn(), new Date(), { addSuffix: true });
    createdOn.classList.add('createdOn');
    createdOn.dataset.editable = 'true';

    
    let g1 = document.createElement('div');
    g1.classList.add('top-line');
    
    let subg1 = document.createElement('div');
    subg1.append(checkbox, title, project)
    let subg2 = document.createElement('div');
    subg2.append(priority, createdOn);
    
    g1.append(subg1, subg2);
        
    element.append(g1, description, dueDate, notes);

    element.querySelectorAll('[data-editable = "true"]').forEach( el => edit(el));

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

todo('Todo #1', `The characters wrapped between two single quotes characters (') are escaped. Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote. (see the last example)`, new Date(2026, 1, 1), 'High', 'notes');
todo('Todo #2', 'description', new Date(), 'Medium', 'notes', 'new project');
todo('Todo #3', 'description', new Date(), 'Low', 'notes');

const adder = document.querySelector('.adder');
adder.addEventListener("click", () => {
    let args = {
        title: '',
        description: '', 
        dueDate: '', 
        priority: '', 
        notes: '', 
        project: ''
    };

    for (const [key, val] of Object.entries(args)) {
        args[key] = prompt(`Enter ${key}: `);
    }

    args.dueDate = new Date(...args.dueDate.split('/'));

    todo(...Object.values(args));
        
});
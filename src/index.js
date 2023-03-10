import { format, formatDistance } from 'date-fns';

const sidePanel = document.querySelector('.sidePanel');
const mainPanel = document.querySelector('.mainPanel');
const adder = document.querySelector('.adder');
const projectsList = [];
const todos = [];

function todo(title, description, dueDate, priority, notes, project = 'main') {
    let _title = title,
        _desc = description,
        _dueDate = dueDate,
        _priority = priority,
        _notes = notes,
        _project,
        _createdOn = new Date(),
        _id = todos.indexOf(todos.at(-1)) + 2; 
    
    set_project(project);

    function set_title(newTitle) { _title = newTitle; }
    function get_title() { return _title; }

    function set_desc(newDesc) { _desc = newDesc; }
    function get_desc() { return _desc; }

    function set_dueDate(newDate) { _dueDate = newDate; }
    function get_dueDate() { return _dueDate; }

    function set_priority(newPriority) { _priority = newPriority; }
    function get_priority() { return _priority; }

    function set_notes(newNotes) { _notes = newNotes; }
    function get_notes() { return _notes; }
    
    function set_project(newProj) { 
        if (newProj === '')
            _project  = 'main';
        else 
            _project = newProj; 

        if (!projectsList.includes(_project)) {
            projectsList.push(_project);
        }

        displayProjects();
    }

    function get_project() { return _project; }

    function get_createdOn() { return _createdOn; }

    function getID() { return _id }
    
    let obj = {
        set_title, 
        get_title, 
        set_desc,
        get_desc,
        set_dueDate,
        get_dueDate,
        set_priority,
        get_priority,
        set_notes,
        get_notes,
        set_project,
        get_project,
        get_createdOn,
        getID,
    };

    displayTodo(obj);
    todos.push(obj);

    return obj;
}

function displayTodo(todo) {
    let element = document.createElement('div');
    element.classList.add('todo');
    element.dataset.project = todo.get_project();
    element.dataset.priority = todo.get_priority();
    element.dataset.id = todo.getID();

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let title = document.createElement('p');
    title.classList.add('title')
    title.innerText = todo.get_title();
    title.dataset.editable = 'true';

    let description = document.createElement('p');
    description.classList.add('description')
    description.innerText = todo.get_desc();
    description.dataset.editable = 'true';

    let dueDate = document.createElement('p');
    dueDate.classList.add('dueDate')
    dueDate.innerText = `Due ${format(todo.get_dueDate(), 'dd/MM/yyyy')}`;
    dueDate.dataset.editable = 'true';

    let priority = document.createElement('p');
    priority.classList.add('priority')
    priority.innerText = element.dataset.priority;
    priority.dataset.editable = 'true';

    let notes = document.createElement('p');
    notes.classList.add('notes')
    notes.innerText = todo.get_notes();
    notes.dataset.editable = 'true';

    let project = document.createElement('p');
    project.classList.add('project')
    project.innerText = element.dataset.project;
    project.dataset.editable = 'true';

    let createdOn = document.createElement('p');
    createdOn.innerText = formatDistance(todo.get_createdOn(), new Date(), { addSuffix: true });
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

    element.querySelectorAll('[data-editable = "true"]').forEach( el => edit(el, todo.getID()));

    mainPanel.appendChild(element);
}

function edit(field, id) {
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
                    todos[id-1][`set_${field.classList[0]}`](editor.value);
                    
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

function add() {
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
}

addEventListener('keydown', (keyevent) => {
    if (keyevent.key === 'A' && keyevent.shiftKey) 
        add();
    if (keyevent.key === 'ArrowDown') {
        let list = document.querySelector('.projectsList');
        let selected = list.querySelector('.selected');
        
        let selIndex = Array.from(list.children).indexOf(selected);
        let next = list.children[ (selIndex + 1) % list.childElementCount ];

        selectProject(next.innerText );
        Array.from(list.children).forEach( child => child.classList.remove('selected'));
        next.classList.add('selected');
    } 
    if (keyevent.key === 'ArrowUp') {
        let list = document.querySelector('.projectsList');
        let selected = list.querySelector('.selected');
        
        let selIndex = Array.from(list.children).indexOf(selected);
        let calc = (selIndex - 1) % list.childElementCount;
        if (calc === -1) calc = list.childElementCount - 1;
        let next = list.children[calc];

        selectProject(next.innerText );
        Array.from(list.children).forEach( child => child.classList.remove('selected'));
        next.classList.add('selected');
    } 
})

adder.addEventListener("click", add);

function displayProjects() {
    let listDOM = sidePanel.querySelector('.projectsList');
    listDOM.replaceChildren();
    listDOM.appendChild( (function() { 
        let el = document.createElement('li');
        el.innerText = 'All';
        el.classList.add('selected');
        return el;
    })() );

    projectsList.forEach( project => {
        let entry = document.createElement('li');
        entry.innerText = project;
        listDOM.append(entry);
    });

    Array.from(listDOM.children).forEach( (child, i, arr) => {
        child.addEventListener("click", (e) => {
            selectProject(child.innerText);
            child.classList.add('selected');
            
            arr.forEach( unselected => { if (unselected !== child) unselected.classList.remove('selected'); });
        });
    });
}

function selectProject(project) {
    mainPanel.replaceChildren();

    if (project === 'All') {
        todos.forEach( todo => displayTodo(todo) );
    }
    else {
        let projectTodos = todos.filter( (todo) => todo.get_project() === project );

        projectTodos.forEach( todo => displayTodo(todo) );
    }
}
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const sidePanel = document.querySelector('.sidePanel');\nconst mainPanel = document.querySelector('.mainPanel');\n\nfunction todo(title, description, dueDate, priority, notes, project = 'main') {\n    let _title = title,\n        _desc = description,\n        _dueDate = dueDate,\n        _priority = priority,\n        _notes = notes,\n        _project = project;\n        \n        function setTitle(newTitle) { _title = newTitle; }\n        function getTitle() { return _title; }\n    \n        function setDesc(newDesc) { _desc = newDesc; }\n        function getDesc() { return _desc; }\n\n        function setDueDate(newDate) { _dueDate = newDate; }\n        function getDueDate() { return _dueDate; }\n\n        function setPriority(newPriority) { _priority = newPriority; }\n        function getPriority() { return _priority; }\n\n        function setNotes(newNotes) { _notes = newNotes; }\n        function getNotes() { return _notes; }\n        \n        function setProject(newProj) { _project = newProj; }\n        function getProject() { return _project; }\n        \n        let obj = {\n            setTitle, \n            getTitle, \n            setDesc,\n            getDesc,\n            setDueDate,\n            getDueDate,\n            setPriority,\n            getPriority,\n            setNotes,\n            getNotes,\n            setProject,\n            getProject,\n        };\n\n        displayTodo(obj);\n\n    return obj;\n}\n\nfunction displayTodo(todo) {\n    let element = document.createElement('div');\n    element.classList.add('todo');\n    element.dataset.project = todo.getProject();\n\n    let title = document.createElement('p');\n    title.classList.add('title')\n    title.innerText = todo.getTitle();\n\n    let description = document.createElement('p');\n    description.classList.add('description')\n    description.innerText = todo.getDesc();\n\n    let dueDate = document.createElement('p');\n    dueDate.classList.add('dueDate')\n    dueDate.innerText = todo.getDueDate();\n\n    let priority = document.createElement('p');\n    priority.classList.add('priority')\n    priority.innerText = todo.getPriority();\n\n    let notes = document.createElement('p');\n    notes.classList.add('notes')\n    notes.innerText = todo.getNotes();\n\n    let project = document.createElement('p');\n    project.classList.add('project')\n    project.innerText = todo.getProject();\n\n\n    element.append(title, description, dueDate, priority, notes, project);\n\n    mainPanel.appendChild(element);\n}\n\ntodo('asasd', 'ads', new Date(), '132', '214124ass asdasd');\ntodo('title', 'description', new Date(), 'priority', 'notes');\ntodo('title', 'description', new Date(), 'priority', 'notes');\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
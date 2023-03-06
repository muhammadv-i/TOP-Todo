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

eval("const sidePanel = document.querySelector('.sidePanel');\r\nconst mainPanel = document.querySelector('.mainPanel');\r\n\r\nfunction todo(title, description, dueDate, priority, notes, project = 'main') {\r\n    function setProject(newProj) {\r\n        project = newProj;\r\n    }\r\n\r\n    return {title, description, dueDate, priority, notes};\r\n}\r\n\r\nfunction displayTodo(todo) {\r\n    let element = document.createElement('div');\r\n    let title = document.createElement('p');\r\n    title.innerText = todo.title;\r\n    let description = document.createElement('p');\r\n    description.innerText = todo.description;\r\n    let dueDate = document.createElement('p');\r\n    dueDate.innerText = todo.dueDate;\r\n    let priority = document.createElement('p');\r\n    priority.innerText = todo.priority;\r\n    let notes = document.createElement('p');\r\n    notes.innerText = todo.notes;\r\n\r\n    element.append(title, description, dueDate, priority, notes);\r\n\r\n    mainPanel.appendChild(element);\r\n    console.log(element);\r\n}\r\n\r\ndisplayTodo(todo('aa', 'aasdadsadad', 'asdasdasd', 'high', 'notestnotestnotes'));\n\n//# sourceURL=webpack://todo/./src/index.js?");

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
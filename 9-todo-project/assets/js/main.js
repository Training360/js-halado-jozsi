'use strict';
import localDB from './localDB.js';

(function() {
    // Mock data.
    let todos = [];
    
    // Parts of date.
    const bodyDay = document.querySelector('.body__day');
    const bodyDate = document.querySelector('.body__date');
    const todoAddBtn = document.querySelector('.todo__btn');
    const todoInput = document.querySelector('.todo__input');
    const todoListPending = document.querySelector('.todo__list--pending');
    const pendingItems = document.querySelector('.todo__number');
    
    const dayNames = [
        'Sunday', 
        'Monday', 
        'Tuesday', 
        'Wednessday', 
        'Thursday', 
        'Friday', 
        'Saturday',
    ];

    // Initialize application.
    const init = () => {
        showDate();
        setListeners();
        loadExistingTodos();
    };

    // Load existing todos.
    const loadExistingTodos = () => {
        const savedTodos = localDB.getItem('todos');
        if (savedTodos) {
            todos = savedTodos;
        }
        
        if (todos && Array.isArray(todos)) {
            todos.forEach( todo => showTodo(todo) );
        }
        showPending();
    };

    // Show date.
    const showDate = () => {
        const currentDate = new Date();
        const day = [
            currentDate.getMonth() + 1, 
            currentDate.getDate(),
            currentDate.getFullYear(), 
        ].map( num => num < 10 ? `0${num}` : num );

        bodyDay.textContent = dayNames[currentDate.getDay()];
        bodyDate.textContent = day.join('-');
    };

    // Set event listeners.
    const setListeners = () => {
        todoAddBtn.addEventListener('click', addNewTodo);
    };

    // Save and add todo to the database.
    const addNewTodo = () => {
        const value = todoInput.value;
        if (value === '') {
            alert('Please type a todo.');
            return;
        }

        const todo = {
            id: `todo-${Math.floor(Math.random() * 100000)}`,
            text: value,
            done: false
        };

        todos.push(todo);

        localDB.setItem('todos', todos);

        showTodo(todo);
        showPending();

        todoInput.value = '';
    };

    // Show todo in the list.
    const showTodo = todo => {
        const todoItem = document.createElement('div');
        todoListPending.appendChild(todoItem);

        todoItem.innerHTML = `
            <input type="checkbox">
            <span>${todo.text}</span>
            <button data-todoid="${todo.id}">
                <i class="fa fa-trash"></i>
            </button>        
        `;

        const delBtn = todoItem.querySelector('button');
        delBtn.addEventListener('click', delTodo);
    };

    // Delete todo item.
    const delTodo = ev => {
        const button = ev.currentTarget;
        const btnParent = button.parentElement;
        const todoID = button.getAttribute('data-todoid');
        const todoIndex = todos.findIndex( todo => todo.id === todoID );
        
        btnParent.parentElement.removeChild(btnParent);
        todos.splice(todoIndex, 1);
        localDB.setItem('todos', todos);
    };

    // Count pending todos.
    const showPending = () => {
        const pendingsNum = todos.filter( todo => !todo.done ).length;
        pendingItems.textContent = pendingsNum;
    };

    init();
})();
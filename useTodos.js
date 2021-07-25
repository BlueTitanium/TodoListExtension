import React, { useState } from 'react';
import uuid from 'react-uuid';

const getTodos = () => {
    const todos = window.localStorage.getItem('todos');
    if (!todos){
        return [];
    }
    return JSON.parse(todos);
}
const useTodos = () => {
    const [todos, setTodos] = useState(getTodos());
    const updateTodos = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos);
        window.localStorage.setItem('todos', stringifiedTodos);
        setTodos(newTodos);
    };
    const setTodoCompleted = (id,completed) => {
        const todoIdx = todos.findIndex(todo => todo.id === id);
        const newTodos = [ ... todos];
        newTodos[todoIdx].completed = completed;
        updateTodos(newTodos);
    };
    const addTodo = (label) => {
        const newTodo = {label, completed: false, id: uuid()};
        updateTodos([... todos, newTodo]);
    };
    const resetTodos = () => {
        window.localStorage.clear();
        updateTodos([]);
    }
    return [todos, addTodo, setTodoCompleted, resetTodos];
}
export default useTodos;
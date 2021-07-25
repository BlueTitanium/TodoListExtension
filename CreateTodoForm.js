import React from 'react'
const CreateTodoForm = ({createNewTodo, resetList}) => {
    const[label, setLabel] = React.useState('');
    return (
        <div className = "create-todo-form">
            <input placeholder="Enter todo label: " onChange={e => setLabel(e.target.value)} value={label}/>
            <button onClick={() => createNewTodo(label)}>
                Save Todo
            </button>
            <button onClick={() => resetList()}>Reset Todos</button>
        </div>
    );
};
export default CreateTodoForm;
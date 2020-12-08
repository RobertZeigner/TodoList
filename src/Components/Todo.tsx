import React from 'react';

const Todo = ({ text, setTodos, todos, todo }: any) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el: any) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item: any) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {text}
      </li>
      <button className='complete-btn' onClick={completeHandler}>
        <i className='fas fa-check'></i>
      </button>
      <button className='trash-btn' onClick={deleteHandler}>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;

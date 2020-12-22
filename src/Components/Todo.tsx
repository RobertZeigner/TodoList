import React from 'react';
// import axios from 'axios';

const Todo = (props: any) => {
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((el: any) => el.id !== props.todo.id));

    // axios.delete('http://localhost:3000/todo', props.todos).then((res) => {
    //   console.log(res);
    // });
  };

  const completeHandler = () => {
    props.setTodos(
      props.todos.map((item: any) => {
        if (item.id === props.todo.id) {
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
      <li className={`todo-item ${props.todo.completed ? 'completed' : ''}`}>
        {props.text}
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

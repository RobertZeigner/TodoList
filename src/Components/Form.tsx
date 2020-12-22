import React from 'react';
import axios from 'axios';

const Form = (props: any) => {
  let randId: number = Math.random() * 1000;

  const inputTextHandler = (e: any) => {
    props.setInputText(e.target.value);
  };

  const submitTodoHandler = (e: any) => {
    e.preventDefault();
    if (props.inputText !== '') {
      props.setTodo([
        ...props.todo,
        {
          text: props.inputText,
          completed: false,
          id: randId,
        },
      ]);
    }
    if (props.inputText !== '') {
      axios.post('http://localhost:3000/todo', {
        todo_name: props.inputText,
        completed: false,
        id: randId,
      });
    }
    props.setInputText('');
  };
  const statusHandler = (e: any) => {
    props.setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={props.inputText}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button className='todo-button' type='submit' onClick={submitTodoHandler}>
        <i className='fas fa-plus-square'></i>
      </button>

      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;

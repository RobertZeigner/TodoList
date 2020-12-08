import React from 'react';
import Todo from './Todo';

const TodoList = (props: any) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {props.filteredTodos.map((todo: any) => (
          <Todo
            text={todo.text}
            key={todo.id}
            todos={props.todos}
            todo={todo}
            setTodos={props.setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

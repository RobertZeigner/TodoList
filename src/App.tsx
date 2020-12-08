import React, { useState, useEffect } from 'react';

import './App.css';
import Form from './Components/Form';
import TodoList from './Components/ToDoList';

function App() {
  const [inputText, setInputText] = useState<string>('');
  const [todos, setTodos] = useState<[]>([]);
  const [status, setStatus] = useState<string>('all');
  const [filteredTodos, setFilteredTodos] = useState<string[]>([]);

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo['completed'] === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo['completed'] === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    // const saveLocalTodos = () => {
    //   localStorage.setItem('todos', JSON.stringify(todos));
    // };
    filterHandler();
    // saveLocalTodos();
  }, [todos, status]);

  // useEffect(() => {
  //   const getLocalTodos = () => {
  //     if (localStorage.getItem('todos') === null) {
  //       localStorage.setItem('todos', JSON.stringify([]));
  //     } else {
  //       //  Error
  //       setTodos(JSON.parse(localStorage.getItem('todos')));
  //     }
  //   };
  //   getLocalTodos();
  // }, []);

  return (
    <div className='App'>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todo={todos}
        setTodo={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;

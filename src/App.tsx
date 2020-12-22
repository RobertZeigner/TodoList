import React, { useState, useEffect } from 'react';
// import axios from 'axios';

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
    filterHandler();
  }, [todos, status]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/todo').then((res) => {
  //     setTodos(res.data);
  //   });
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

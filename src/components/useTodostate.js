import React, { useState } from 'react';

let initialid = 0;
let historyid = 0;

const useTodostate = () => {
  const [todos, setTodos] = useState([]);
  const [historyelement, setHistoryelement] = useState([]);

  return {
    todos,
    addTodo: todoText => {
      setTodos([
        ...todos,
        {
          // id: Date.now(),
          id: initialid++,
          text: todoText,
          completed: false,
        }
      ]);
      setHistoryelement([
        ...todos,
        {
          // id: Date.now(),
          id: historyid++,
          text: todoText,
          completed: false,
        }
      ]);
    },
    toggleTodo: id => {
      console.log(id);
      const toggled = todos.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
      setTodos(toggled);
      const toggler = todos.map(todo =>
        (todo.id === id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
      setHistoryelement(toggler);
    },
    searchActive: () => {
      console.log(todos)
      setTodos([]);
      const active = historyelement.filter(t => t.completed === false)
      console.log(active);
      setTodos(active);
    },
    searchCompleted: () => {
      setTodos([]);
      const completed = historyelement.filter(t => t.completed === true)
      setTodos(completed);
    },
    setAll: () => {
      setTodos([]);
      setTodos(historyelement);
    }
  };

};

export default useTodostate;

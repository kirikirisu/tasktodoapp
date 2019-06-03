import React, { useState } from 'react';

let initialid = 0;

const useTodostate = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [active, setActive] = useState([]);

  return {
    todos,
    active,
    completed,
    addTodo: todoText => {
      setTodos([
        ...todos,
        {
          id: initialid++,
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
    },
    setActive: () => {
      const active = todos.filter(t => t.completed === false)
      // console.log(active);
      setActive([]);
      setActive(active);
    },
    setCompleted: () => {
      const completed = todos.filter(t => t.completed === true)
      setCompleted([]);
      setCompleted(completed);
    },
    /* setAll: () => {
      setTodos([]);
      setTodos(historyElement);
    } */
  };

};

export default useTodostate;

import React from 'react';
import List from '../listComponent/list';
import Input from '../inputComponent/input';
import useTodostate from '../useTodostate';

const Main = () => {
  const {
    todos,
    addTodo,
    toggleTodo,
    searchActive,
    searchCompleted,
    setAll,
  } = useTodostate([]);

  return (
    <div>
      <Input
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <List
        todos={todos}
        toggleTodo={toggleTodo}
      />
      <button onClick={() => searchCompleted()}>完了</button>
      <button onClick={() => setAll()}>全て</button>
      <button onClick={() => searchActive()}>未完了</button>
    </div>
  );
};

export default Main;
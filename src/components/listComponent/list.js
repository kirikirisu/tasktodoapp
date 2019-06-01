import React from 'react';

const List = ({
  todos,
  toggleTodo,
}) => {
  // console.log(todos);

  const listItems = todos.map((todo) =>
    <li
      key={todo.id}
      // onClick={() => console.log(todo.id)}
      onClick={() => toggleTodo(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none'
      }}
    >
      {todo.text}
    </li>
  );
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}


export default List;

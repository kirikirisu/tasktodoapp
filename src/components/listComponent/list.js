import React from 'react';

const List = ({
  id,
  text,
  toggleTodo,
  completed }) => (
    <li
      key={id}
      onClick={() => toggleTodo(id)}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        listStyle: 'none',
        color: '#ffffff',
        marginRight: '70px',
        fontSize: '1.8rem',
        textAlign: 'center',
      }}
    >
      {text}
    </li>
  );

export default List;
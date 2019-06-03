import React, { Component } from 'react';

class List extends Component {
  render() {
    const {
      id,
      text,
      toggleTodo,
      completed,
    } = this.props;

    return (
      <li
        key={id}
        onClick={() => toggleTodo(id)}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        {text}
      </li>
    );
  }
}

export default List;
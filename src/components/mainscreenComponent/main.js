import React, { useState } from 'react';
import List from '../listComponent/list';

let id = 0;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      completed: [],
      active: [],
      all: [],
    };
  }

  toggleTodo = (id) => {
    const { todos } = this.state;
    const toggled = todos.map(todo =>
      (todo.id === id)
        ? { ...todo, completed: !todo.completed }
        : todo
    )
    this.setState({ todos: [] });
    this.setState({ todos: toggled });
    // console.log(this.state.todos);
  }

  searchCompleted = () => {
    const { todos } = this.state;
    const completed = todos.filter(t => t.completed === true);
    this.setState({ completed: [] });
    this.setState({ completed: completed });
  }

  searchActive = () => {
    const { todos } = this.state;
    const active = todos.filter(t => t.completed === false);
    this.setState({ active: [] });
    this.setState({ active: active });
  }

  setAll = () => {
    const { todos } = this.state;
    this.setState({ all: [] });
    this.setState({ all: todos });
  }

  render() {

    console.log(this.state.todos);
    console.log(this.state.completed);
    console.log(this.state.active);
    console.log(this.state.all);

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();

            const text = e.target.elements["title"]

            this.setState(
              {
                todos: this.state.todos.concat({
                  text: text.value,
                  completed: false,
                  id: id++,
                })
              },

              () => {
                text.value = "";
              }
            )
          }}
        >
          <input
            id="title"
            placeholder="title"
          />
          <div>
            <button type="submit">
              追加
            </button>
          </div>
        </form>
        <div>
          <ul>
            {this.state.todos.map(todo => (
              <List
                id={todo.id}
                completed={todo.completed}
                text={todo.text}
                toggleTodo={this.toggleTodo}
              />
            ))}
          </ul>
        </div>
        <button onClick={this.searchCompleted}>完了</button>
        <button onClick={this.searchActive}>未完了</button>
        <button onClick={this.setAll}>全て</button>
      </div>
    );
  }
}

export default App;

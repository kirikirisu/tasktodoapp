import React, { useState } from 'react';
import Modal from 'react-modal';
import List from '../listComponent/list';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

let id = 0;

Modal.setAppElement('#root')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      completed: [],
      active: [],
      all: [],
      modalIsOpen: false,
      modalElement: [],
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
    this.setState({ modalElement: [] });
    this.setState({ modalElement: completed });
    this.openModal();
  }

  searchActive = () => {
    const { todos } = this.state;
    const active = todos.filter(t => t.completed === false);
    this.setState({ active: [] });
    this.setState({ active: active });
    this.setState({ modalElement: [] });
    this.setState({ modalElement: active });
    this.openModal();
  }

  setAll = () => {
    const { todos } = this.state;
    this.setState({ all: [] });
    this.setState({ all: todos });
    this.setState({ modalElement: [] });
    this.setState({ modalElement: todos });
    this.openModal();
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }

  modalRenderProducts = (product) => {
    return (
      <li>
        {product.text}
      </li>
    )
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
        <div>
          <button onClick={this.searchCompleted}>完了</button>
          <button onClick={this.searchActive}>未完了</button>
          <button onClick={this.setAll}>全て</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>Close</button>
          {this.state.modalElement.map(product => this.modalRenderProducts(product))}
        </Modal>
      </div>
    );
  }
}

export default App;

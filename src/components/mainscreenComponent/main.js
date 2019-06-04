import React from 'react';
import Modal from 'react-modal';
import List from '../listComponent/list';
import Motivation from '../motivationComponent/motivation';
import '../../styles/main.css';
import ChatUi from '../chatUiComponent/chat';

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
      modalIsOpen: false,
      modalElement: [],
      chatShow: false,
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
    // this.setState({ completed: [] });
    // this.setState({ completed: completed });
    this.setState({ modalElement: [] });
    this.setState({ modalElement: completed });
    this.openModal();
    this.falseChatShow();
  }

  searchActive = () => {
    const { todos } = this.state;
    const active = todos.filter(t => t.completed === false);
    // this.setState({ active: [] });
    // this.setState({ active: active });
    this.setState({ modalElement: [] });
    this.setState({ modalElement: active });
    this.openModal();
    this.trueChatShow();
  }

  setAll = () => {
    const { todos } = this.state;
    // this.setState({ all: [] });
    // this.setState({ all: todos });
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

  trueChatShow = () => {
    this.setState({ chatShow: true });
  }

  falseChatShow = () => {
    this.setState({ chatShow: false });
  }

  render() {

    // console.log(this.state.todos);
    // console.log(this.state.completed);
    // console.log(this.state.active);
    // console.log(this.state.all);
    // console.log(this.state.modalElement);
    const { chatShow } = this.state;
    console.log(chatShow);

    return (
      <div className="appContainer">
        <div className="setting">
          <div className="chatSpace">
            <div className="animationChatF">
              <ChatUi word="速く動いて失敗せよ" />
            </div>
            <div className="animationChatS">
              <ChatUi word="リスクをとらないことが最大のリスクだ" />
            </div>
            <div className="animationChatT">
              <ChatUi word="ミスよりグズを嫌え" />
            </div>
          </div>
          <div style={{ display: chatShow ? '' : 'none' }} className="animationChatFF">
            <ChatUi word="完璧を目指すよりも、まずは終わらせろ" />
          </div>
          <div className="todoContainer">
            <p className="title">JUST DO IT.</p>
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
              <div className="inputAndButton">
                <input
                  className="input"
                  id="title"
                  placeholder="Type your task!!"
                />
                <button className="add" type="submit">
                  追加
            </button>
              </div>
            </form>
            <div className="history">
              <p className="show">Show:</p>
              <button className="showButton" onClick={this.searchCompleted}>完了</button>
              <button className="showButton" onClick={this.searchActive}>未完了</button>
              <button className="showButton" onClick={this.setAll}>全て</button>
            </div>
            <div className="listContainer">
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
          </div>
        </div>
        <Motivation />

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          {this.state.modalElement.map(product => {
            if (product.text) {
              return (
                this.modalRenderProducts(product)
              );
            }
          })
          }
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default App;

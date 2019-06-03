import React, { useState } from 'react';
import List from '../listComponent/list';
import Input from '../inputComponent/input';
import useTodostate from '../useTodostate';
import Modal from 'react-modal';

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

Modal.setAppElement('#root');

const Main = () => {
  const {
    todos,
    active,
    completed,
    addTodo,
    toggleTodo,
    setActive,
    setCompleted,
  } = useTodostate([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMap, setModalMap] = useState([]);

  const activeButton = () => {
    setActive();
    setModalMap([]);
    setModalMap(active);
  }

  const completedButton = () => {
    setCompleted();
    setModalMap([]);
    setModalMap(completed);
  }

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const renderProducts = (product) => {
    return (
      <li key={product.id}>{product.text}</li>
    )
  }

  console.log(active);
  console.log(completed);

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
      <button onClick={() => activeButton()}>未完了</button>
      <button onClick={() => completedButton()}>完了</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal()}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal()}>Close</button>
        {modalMap.map(product => renderProducts(product))}
      </Modal>
    </div>
  )
}

export default Main;
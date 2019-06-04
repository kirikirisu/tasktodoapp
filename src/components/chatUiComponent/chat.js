import React from 'react';
import '../../styles/chat.css';
import img from './l_yu_mark.jpg';

const Chat = ({ word }) => (
  <div class="balloon5">
    <div class="faceicon">
      <img src={img} alt="img" />
    </div>
    <div class="chatting">
      <div class="says">
        <p>{word}</p>
      </div>
    </div>
  </div>
);

export default Chat;

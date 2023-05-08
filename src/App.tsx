import React from 'react';
import Modal from '../src/lib/Modal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Modal trigger={<button>눌러주세요</button>}>
        <div>
          <h1>헤더입니다.</h1>
          <p>내용입니다.</p>
          <button data-modal="close">아이콘</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;

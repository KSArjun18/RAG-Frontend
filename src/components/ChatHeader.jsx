import React from 'react';

const ChatHeader = ({ onReset }) => (
  <header className="app-header">
    <h1>News RAG Chatbot</h1>
    <button onClick={onReset} className="reset-btn">Reset Session</button>
  </header>
);

export default ChatHeader;

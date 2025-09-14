import React, { useEffect, useRef } from 'react';

const ChatMessages = ({ messages, isLoading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="messages-container">
      {messages.length === 0 ? (
        <div className="welcome-message">
          <p>Welcome! I'm a chatbot that can answer questions about recent news articles.</p>
          <p>Ask me anything about current events!</p>
        </div>
      ) : (
        messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            <div className="message-content">{message.content}</div>
          </div>
        ))
      )}

      {isLoading && (
        <div className="message assistant">
          <div className="message-content typing">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;

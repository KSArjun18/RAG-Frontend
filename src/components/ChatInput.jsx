import React from 'react';

const ChatInput = ({ inputMessage, setInputMessage, handleSend, isDisabled }) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your question about news..."
        disabled={isDisabled}
      />
      <button
        onClick={handleSend}
        disabled={isDisabled || !inputMessage.trim()}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;

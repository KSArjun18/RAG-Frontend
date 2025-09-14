import { useState, useEffect } from 'react';
import './styles/App.scss';
import ChatHeader from './components/ChatHeader';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import { createSession, getHistory, sendMessage, resetSessionHistory } from './services/api';

function App() {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initializeSession();
  }, []);

  const initializeSession = async () => {
    try {
      let savedSessionId = localStorage.getItem('sessionId');
      if (!savedSessionId) {
        savedSessionId = await createSession();
        localStorage.setItem('sessionId', savedSessionId);
      }
      setSessionId(savedSessionId);
      const history = await getHistory(savedSessionId);
      setMessages(history);
    } catch (error) {
      console.error('Error initializing session:', error);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !sessionId || isLoading) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const answer = await sendMessage(sessionId, inputMessage);

      const assistantMessage = { role: 'assistant', content: '' };
      setMessages(prev => [...prev, assistantMessage]);

      const words = answer.split(' ');
      let currentText = '';
      for (let i = 0; i < words.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 50));
        currentText += words[i] + ' ';
        setMessages(prev => prev.map((msg, index) =>
          index === prev.length - 1 ? { ...msg, content: currentText } : msg
        ));
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev,
        { role: 'assistant', content: 'Sorry, I encountered an error processing your request.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSession = async () => {
    if (sessionId) await resetSessionHistory(sessionId);
    setMessages([]);
    localStorage.removeItem('sessionId');
    initializeSession();
  };

  return (
    <div className="app-wrapper">
      <div className="animated-background"></div>
      <div className="app">
        <ChatHeader onReset={handleResetSession} />
        <div className="chat-container">
          <ChatMessages messages={messages} isLoading={isLoading} />
          <ChatInput
            inputMessage={inputMessage}
            setInputMessage={setInputMessage}
            handleSend={handleSendMessage}
            isDisabled={isLoading || !sessionId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

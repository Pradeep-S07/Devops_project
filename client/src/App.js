import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    const userMessage = { sender: 'user', text: message };
    setChat([...chat, userMessage]);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { message });
      const botMessage = { sender: 'bot', text: response.data.reply };
      setChat(prevChat => [...prevChat, botMessage]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>🤖 AI Chatbot</h2>
      <div style={{ minHeight: '300px', border: '1px solid #ccc', padding: '10px' }}>
        {chat.map((msg, idx) => (
          <p key={idx}><strong>{msg.sender}:</strong> {msg.text}</p>
        ))}
      </div>
      <input
        style={{ width: '80%', padding: '10px', marginTop: '10px' }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage} style={{ padding: '10px 20px' }}>Send</button>
    </div>
  );
}

export default App;

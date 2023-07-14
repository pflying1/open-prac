import React, { useState } from 'react';

const App = () => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPrompt(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const requestBody = { prompt: inputPrompt };

    const response = await fetch('/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    const result = await response.text();
    setResponseText(result);
  };

  return (
    <div>
      <h1>Chat with Assistant</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ask a question"
          onChange={handleInputChange}
          value={inputPrompt}
        />
        <button type="submit">Send</button>
      </form>
      <div>
        <p>Assistant's response:</p>
        <p>{responseText}</p>
      </div>
    </div>
  );
};

export default App;

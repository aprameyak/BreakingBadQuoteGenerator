'use client'
import { useState } from "react";

export default function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  async function getQuote() {
    try {
      const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
      setQuote(json[0].quote);
      setAuthor(json[0].author);
    } catch (error) {
      console.error(error.message);
    }
  }

  // Define styles inside JS
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url("./breakingbad.png")',
    fontFamily: "'Arial', sans-serif",
  };

  const headingStyle = {
    backgroundColor: 'white',
    fontSize: '2rem',
    color: '#00892b',
    textAlign: 'center',
    margin: '10px 0',
    borderRadius: '8px',
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#00892b',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        Breaking Bad Quote Generator
      </h1>
      <button style={buttonStyle} onClick={getQuote}>
        Generate
      </button>
      <h1 style={headingStyle}>
        {quote}
      </h1>
      <h1 style={headingStyle}>
        {author}
      </h1>
    </div>
  );
}

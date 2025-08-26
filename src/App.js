'use client'
import { useState } from "react";
import { Analytics } from '@vercel/analytics/react';

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: 'white', padding: '10px 20px', borderRadius: '8px', marginBottom: '20px' }}>
        <img src="/icon.svg" alt="Breaking Bad Icon" style={{ width: '50px', height: '50px' }} />
        <h1 style={{ ...headingStyle, margin: 0 }}>
          Breaking Bad Quote Generator
        </h1>
      </div>
      <button style={buttonStyle} onClick={getQuote}>
        Generate
      </button>
      <h1 style={headingStyle}>
        {quote}
      </h1>
      <h1 style={headingStyle}>
        {author}
      </h1>
      <Analytics />
    </div>
  );
}

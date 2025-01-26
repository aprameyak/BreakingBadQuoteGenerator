'use client'
import styles from "./App.css";
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

  return (
    <div className={styles.container}>
      <h1 className={styles.h}>
        Breaking Bad Quote Generator
      </h1>
      <button className={styles.but} onClick={getQuote}>
        Generate
      </button>
      <h1 className={styles.h}>
        {quote}
      </h1>
      <h1 className={styles.h}>
        {author}
      </h1>
    </div>
  );
}

import React from 'react';
import { appStyles } from '../styles/appStyles';

interface QuoteDisplayProps {
  quote: string;
  author: string;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ quote, author }) => {
  if (!quote && !author) {
    return null;
  }

  return (
    <>
      {quote && (
        <h1 style={appStyles.headingStyle}>
          {quote}
        </h1>
      )}
      {author && (
        <h1 style={appStyles.headingStyle}>
          - {author}
        </h1>
      )}
    </>
  );
};

export default QuoteDisplay;

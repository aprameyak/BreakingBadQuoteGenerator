import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import { appStyles } from './styles/appStyles';
import { useQuote } from './hooks/useQuote';
import Header from './components/Header';
import GenerateButton from './components/GenerateButton';
import QuoteDisplay from './components/QuoteDisplay';
import ErrorDisplay from './components/ErrorDisplay';

const App: React.FC = () => {
  const { quote, author, isLoading, error, getQuote } = useQuote();

  return (
    <div style={appStyles.containerStyle}>
      <Header />
      
      <GenerateButton onClick={getQuote} isLoading={isLoading} />
      
      <ErrorDisplay error={error} />
      
      <QuoteDisplay quote={quote} author={author} />
      
      <Analytics />
    </div>
  );
};

export default App;

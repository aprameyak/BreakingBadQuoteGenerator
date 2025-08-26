import { useState, useCallback } from 'react';
import { BreakingBadQuote } from '../types';
import { QuoteService } from '../services/quoteService';

export const useQuote = () => {
  const [quote, setQuote] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getQuote = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    
    try {
      const quoteData: BreakingBadQuote = await QuoteService.getRandomQuote();
      setQuote(quoteData.quote);
      setAuthor(quoteData.author);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setError(errorMessage);
      console.error('Error in getQuote:', errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearQuote = useCallback((): void => {
    setQuote('');
    setAuthor('');
    setError(null);
  }, []);

  return {
    quote,
    author,
    isLoading,
    error,
    getQuote,
    clearQuote,
  };
};

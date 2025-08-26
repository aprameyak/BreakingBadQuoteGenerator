import { BreakingBadQuote, QuoteResponse } from '../types';

const API_BASE_URL = 'https://api.breakingbadquotes.xyz/v1/quotes';

export class QuoteService {
  /**
   * Fetches a random Breaking Bad quote from the API
   * @returns Promise<BreakingBadQuote> - The quote data
   * @throws Error - If the API request fails
   */
  static async getRandomQuote(): Promise<BreakingBadQuote> {
    try {
      const response = await fetch(API_BASE_URL);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: QuoteResponse = await response.json();
      
      if (!data || !data[0]) {
        throw new Error('Invalid response format from API');
      }
      
      return data[0];
    } catch (error) {
      console.error('Error fetching quote:', error);
      throw new Error(
        error instanceof Error 
          ? error.message 
          : 'Failed to fetch quote from API'
      );
    }
  }
}

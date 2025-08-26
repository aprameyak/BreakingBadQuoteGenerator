export interface BreakingBadQuote {
  quote: string;
  author: string;
}

export interface QuoteResponse {
  [index: number]: BreakingBadQuote;
}

export interface AppStyles {
  containerStyle: React.CSSProperties;
  headingStyle: React.CSSProperties;
  buttonStyle: React.CSSProperties;
  headerContainerStyle: React.CSSProperties;
  headerTitleStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
}

export interface AppState {
  quote: string;
  author: string;
}

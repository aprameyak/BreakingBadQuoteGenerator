import React from 'react';

interface ErrorDisplayProps {
  error: string | null;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error }) => {
  if (!error) {
    return null;
  }

  const errorStyle: React.CSSProperties = {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '10px 20px',
    borderRadius: '8px',
    margin: '10px 0',
    textAlign: 'center',
    fontSize: '1rem',
    border: '1px solid #ffcdd2',
  };

  return (
    <div style={errorStyle}>
      <strong>Error:</strong> {error}
    </div>
  );
};

export default ErrorDisplay;

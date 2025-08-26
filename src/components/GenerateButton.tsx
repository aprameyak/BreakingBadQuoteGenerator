import React from 'react';
import { appStyles } from '../styles/appStyles';

interface GenerateButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick, isLoading }) => {
  const buttonStyle = {
    ...appStyles.buttonStyle,
    backgroundColor: isLoading ? '#666' : appStyles.buttonStyle.backgroundColor,
    cursor: isLoading ? 'not-allowed' : 'pointer',
  };

  return (
    <button 
      style={buttonStyle} 
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? 'Generating...' : 'Generate Quote'}
    </button>
  );
};

export default GenerateButton;

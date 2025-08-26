import React from 'react';
import { appStyles } from '../styles/appStyles';

const Header: React.FC = () => {
  return (
    <div style={appStyles.headerContainerStyle}>
      <img 
        src="/icon.svg" 
        alt="Breaking Bad Icon" 
        style={appStyles.iconStyle} 
      />
      <h1 style={appStyles.headerTitleStyle}>
        Breaking Bad Quote Generator
      </h1>
    </div>
  );
};

export default Header;

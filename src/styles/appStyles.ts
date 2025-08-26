import { AppStyles } from '../types';

export const appStyles: AppStyles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundImage: 'url("./breakingbad.png")',
    fontFamily: "'Arial', sans-serif",
  },

  headingStyle: {
    backgroundColor: 'white',
    fontSize: '2rem',
    color: '#00892b',
    textAlign: 'center',
    margin: '10px 0',
    borderRadius: '8px',
  },

  buttonStyle: {
    padding: '12px 24px',
    backgroundColor: '#00892b',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },

  headerContainerStyle: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },

  headerTitleStyle: {
    backgroundColor: 'white',
    fontSize: '2rem',
    color: '#00892b',
    textAlign: 'center',
    margin: 0,
    borderRadius: '8px',
  },

  iconStyle: {
    width: '50px',
    height: '50px',
  },
};

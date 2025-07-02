import { useState } from 'react';
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    
    if (newCount >= 10) {
      setMessage("You've reached the limit!");
    } else {
      setMessage('');
    }
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Click Counter</h1>
      <p style={styles.counter}>Count: {count}</p>
      {message && <p style={styles.message}>{message}</p>}
      
      <div style={styles.buttonContainer}>
        <button 
          style={styles.button} 
          onClick={increaseCount}
        >
          Increase
        </button>
        <button 
          style={{...styles.button, ...styles.decreaseButton}} 
          onClick={decreaseCount}
          disabled={count === 0}
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    border: '1px solid #000'
  },
  title: {
    color: '#333'
  },
  counter: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '20px 0'
  },
  message: {
    color: '#e74c3c',
    fontWeight: 'bold'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  decreaseButton: {
    backgroundColor: '#e74c3c'
  }
};

export default App

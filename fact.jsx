import { useState } from 'react';
import axios from 'axios';
import './Fact.css'; // Plain CSS import

function Fact() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  let calculateFactorial = () => {
    if (number === '') {
      setMessage('Please enter a number.');
      return;
    }
   let url = "http://localhost:9000/ping";
    axios.get(url)
      .then(response => {
        setMessage(response.data);
      })
      .catch(err => {
        setMessage('Error contacting server');
        console.error(err);
      });
  };

  let HandleClick = () => {
    if (number === '') {
      setMessage('Please enter a number.');
      return;
    }
// let url = "http://localhost:9000/num";
    let url = "https://factorial15.onrender.com/num";
    let json = {
    params:{number}
    }
    axios.get(url,json)
      .then(response => {
        setMessage(response.data);
      })
      .catch(err => {
        setMessage('Error contacting server');
        console.error(err);
      });
  };
  return (
    <div className="container">
      <h2 className="heading">Factorial Calculator</h2>
      <input
        type="number"
        placeholder="Enter a non-negative integer"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="input"
      />
      <br />
      <button onClick={HandleClick} className="button">
        Calculate
      </button>
      {message && <p className="result">{message}</p>}
    </div>
  );
}

export default Fact;

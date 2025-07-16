import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [machines, setMachines] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/machines`)
      .then(res => res.json())
      .then(data => setMachines(data))
      .catch(err => console.error(err));
  }, [apiUrl]);

  const handleButtonClick = () => {
    window.open(`${apiUrl}/machines`, '_blank');
  };

  return (
    <div>
      <h1>Inventário Front</h1>
      <button onClick={handleButtonClick}>
        Ver requisição /machines
      </button>
      <ul>
        {machines.map((machine, idx) => (
          <li key={idx}>{JSON.stringify(machine)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  const [currency, setCurrency] = useState([]);

  const fetchURL = 'https://api.coincap.io/v2/assets';

  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());
  useEffect(() => {
    const interval = setInterval(() => {
      getData().then((data) => setCurrency(data.data));
    }, 5000);
    return () => clearInterval(interval);
  }, [currency]);

  return (
    <div>
      <Header currency={currency} />
      <Main currency={currency} />
    </div>
  );
}

export default App;

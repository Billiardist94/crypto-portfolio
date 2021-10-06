import React, { useEffect, useState } from 'react';
import HeaderInfo from '../Header/TopCurrency/TopCurrency';
import Main from '../Main/Main';
import Preloader from '../CurrencyCard/Preloader';

const FetchData = () => {
  const [currency, setCurrency] = useState([]);

  const fetchURL = 'https://api.coincap.io/v2/assets';

  const getData = () => fetch(`${fetchURL}`).then((res) => res.json());
  useEffect(() => {
    const interval = setInterval(() => {
      getData().then((data) => setCurrency(data.data));
      getData().catch((error) => error);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (currency === null) {
    return <Preloader />;
  }
  return (
    <div>
      <HeaderInfo currency={currency} />
      <Main currency={currency} />
    </div>
  );
};

export default FetchData;

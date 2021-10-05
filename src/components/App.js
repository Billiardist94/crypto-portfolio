import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FetchData from './FetchData/FetchData';
import CurCard from './CurrencyCard/CurCard';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={FetchData} />
          <Route exact path="/:id" component={CurCard} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

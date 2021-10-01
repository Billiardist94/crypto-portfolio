import React from 'react';
import './Header.css';
import Case from './Case/Case';
import UserInfo from './UserInfo/UserInfo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-body">
          <h1 className="header-logo">Crypto Portfolio</h1>
          <ul className="header-currency">
            <li>Bitcoin</li>
            <li>Ethereum</li>
            <li>Cardano</li>
          </ul>
          <div className="header-case">
            <Case />
            <UserInfo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

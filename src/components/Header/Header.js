import React from 'react';
import './Header.css';
import Case from './Case/Case';
import UserLogo from './UserLogo/UserLogo';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <h1 className="title">Crypto Portfolio</h1>
          <div className="user__info">
            <Case />
            <UserLogo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

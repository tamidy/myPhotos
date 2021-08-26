import React from 'react';
import './Account.css';
import defaultpic from './images/defaultprofilepic.png';

function AccountPage() {
  return (
    <div id="accountpage">
        <img src={defaultpic} alt="Profile picture" />
        <h2>Tahmina Yousafi</h2>
        <div id="info">
            <p>2/18/1999</p>
            <p>Germantown, MD</p>
        </div>
    </div>
  );
}

export default AccountPage;

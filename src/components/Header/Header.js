import React from 'react';
import './Header.css';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

function Header() {
  return (
    <div className="header">
      <div>
        <img src='https://www.fichaya.com/fichaya.ico' alt="Logo" className="logo" />
      </div>
      <div className="pages text-muted">
        <h1>DASHBOARD</h1>
        <h1>CUSTOMERS</h1>
        <h1>ASSOCIATES</h1>
        <h1>REQUESTS</h1>
        <h1>SCHEDULES</h1>
        <h1>PAYMENTS</h1>
        <h1>SETTINGS</h1>
      </div>
      <div className="my-icons">
        <div className="notifications">
          <NotificationsSharpIcon />
        </div>
        <div className="notifications">
          <PersonRoundedIcon />
          <ExpandMoreRoundedIcon />
        </div>
      </div>
    </div>
  )
}

export default Header;

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Requests from './pages/Requests';
import Associates from './pages/Associates';
import Payments from './pages/Payments';
import Settings from './pages/Settings';
import Schedules from './pages/Schedules';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="header">
            <li>
              <div>
                <Link to='/'>
                  <img src='https://www.fichaya.com/fichaya.ico' alt="Logo" className="logo" />
                </Link>
              </div>
            </li>
            <li>
              <ul className="pages text-muted">
                <li>
                  <Link to='/' className="header-anchor">DASHBOARD</Link>
                </li>
                <li>
                  <Link to='/customers' className="header-anchor">CUSTOMERS</Link>
                </li>
                <li>
                  <Link to='/associates' className="header-anchor">ASSOCIATES</Link>
                </li>
                <li>
                  <Link to='/requests' className="header-anchor">REQUESTS</Link>
                </li>
                <li>
                  <Link to='/schedules' className="header-anchor">SCHEDULES</Link>
                </li>
                <li>
                  <Link to='/payments' className="header-anchor">PAYMENTS</Link>
                </li>
                <li>
                  <Link to='/settings' className="header-anchor">SETTINGS</Link>
                </li>
              </ul>
            </li>
            <li>
              <ul className="my-icons">
                <li className="notifications">
                  <NotificationsSharpIcon />
                </li>
                <li className="notifications">
                  <PersonRoundedIcon />
                  <ExpandMoreRoundedIcon />
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/customers" component={Customers} />
          <Route exact path="/requests" component={Requests} />
          <Route exact path="/associates" component={Associates} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/schedules" component={Schedules} />
          <Route exact path="/payments" component={Payments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

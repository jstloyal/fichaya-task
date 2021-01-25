import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
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
                <NavLink to='/'>
                  <img src='https://www.fichaya.com/fichaya.ico' alt="Logo" className="logo" />
                </NavLink>
              </div>
            </li>
            <li>
              <ul className="pages text-muted">
                <li>
                  <NavLink 
                    exact
                    to='/'
                    className="header-anchor"
                    activeStyle={{borderBottom: '3px solid #313899', color: '#323899', paddingBottom: '1em'}}
                  >
                    DASHBOARD
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/customers' 
                    className="header-anchor"
                    activeStyle={{borderBottom: '3px solid #313899', color: '#323899', paddingBottom: '1em'}}
                  >
                    CUSTOMERS
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/associates' 
                    className="header-anchor"
                    activeStyle={{borderBottom: '3px solid #313899', color: '#323899', paddingBottom: '1em'}}
                  >
                    ASSOCIATES
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/requests' 
                    className="header-anchor"
                    activeStyle={{borderBottom: '3px solid #313899', color: '#323899', paddingBottom: '1em'}}
                  >
                    REQUESTS
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/schedules' 
                    className="header-anchor"
                    activeStyle={{borderBottom: '3px solid #313899', color: '#323899', paddingBottom: '1em'}}
                  >
                    SCHEDULES
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/payments' 
                    className="header-anchor"
                    activeStyle={{borderBottom: '3px solid #313899', color: '#323899', paddingBottom: '1em'}}
                  >
                    PAYMENTS
                  </NavLink>
                </li>
                <li>
                  <NavLink 
                    to='/settings' 
                    className="header-anchor"
                    activeStyle={{borderBottom: '3px solid #313899', color: '#323899', paddingBottom: '1em'}}
                  >
                    SETTINGS
                  </NavLink>
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

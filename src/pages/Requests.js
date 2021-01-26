import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Button, Card, Badge, DropdownButton, SplitButton, Dropdown } from 'react-bootstrap';
import InvoiceForm from '../components/Invoice/InvoiceForm';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

function Requests() {
  return (
    <div className="content">
      <Button size="sm" className="my-btn">Request Information</Button>
      <Card className="mt-4 my-card">
        <div className="card-info pb-3">
          <div className="d-flex flex-md-column col">
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">REQUEST TYPE</p>
              <p className="card-text">POST-CON</p>
            </div>
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">INVOICE STATUS</p>
              <Badge className="my-badge">UNGENERATED</Badge>
            </div>
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">LOCATION</p>
              <p className="card-text">8, YOVI STREET, IWAYA, ONIKE, YABA</p>
            </div>
          </div>
          <div className="d-flex flex-md-column col">
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">CUSTOMER NAME</p>
              <p className="card-text">PETER ABU-EKPESHIE</p>
            </div>
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">REQUEST DATE</p>
              <p className="card-text">06-10-2016</p>
            </div>
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">HOUSE-TYPE</p>
              <p className="card-text">5-BEDROOM DUPLEX</p>
            </div>
          </div>
          <div className="d-flex flex-md-column col">
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">REQUEST TYPE</p>
              <p className="card-text">POST-CON</p>
            </div>
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">INVOICE STATUS</p>
              <p className="card-text">UNGENERATED</p>
            </div>
            <div className="d-flex flex-md-column p-2">
              <p className="card-text-head mb-1">LOCATION</p>
              <p className="card-text">8, YOVI STREET, IWAYA, ONIKE, YABA</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <SplitButton
            menuAlign={{ lg: 'left'}}
            title="Actions"
            id="dropdown-menu-align-responsive-2"
            drop="up"
            className="my-btns actions float-right"
          >
            <Dropdown.Item eventKey="1">Contact customer</Dropdown.Item>
            <Dropdown.Item eventKey="2"><NavLink to="/invoice">Generate invoice</NavLink></Dropdown.Item>
            <Dropdown.Item eventKey="3">Reject request</Dropdown.Item>
          </SplitButton>
        </div>
      </Card>
      <Switch>
        <Route exact path="/invoice" component={InvoiceForm} />
      </Switch>
    </div>
  );
};

export default Requests;

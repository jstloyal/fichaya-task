import React, { useState} from 'react';
import { useForm } from 'react-hook-form';
import { Route, Link } from 'react-router-dom';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import GenerateInvoice from '../Generated-Invoice/Invoice';
import './InvoiceForm.styles.css';

function InvoiceForm() {
  const { register, handleSubmit } = useForm();
  const [formInput, setFormInput] = useState({
    name: '',
    description: '',
    total: '',
    address: '',
    phone: '',
    issue: '',
    due: '',
    email: '',
    invoiceNum: '',
    vat: '',
    amount: '',
  });

  const fillForm = event => {
    setFormInput({...formInput, [event.target.name]: event.target.value})
  };

  const onSubmit = data => console.log(data);

  return (
    <div className="content">
      <div className="my-invoice">
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Button size="sm" className="my-btn">Generate invoice</Button>
        <p className="mt-2">ENTER INVOICE INFO</p>
        <div className="invoice-form">
          <Card className="invoice-card">
            <Form.Group>
              <Form.Label>Customer/ Company name</Form.Label>
              <Form.Control 
                type="text"
                name="name"
                value={formInput.name}
                onChange={fillForm}
                ref={register}
                className="form-line"
                placeholder="Spleet Limited"
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control 
                    type="email"
                    name="email"
                    value={formInput.email}
                    onChange={fillForm}
                    ref={register}
                    className="form-line"
                    placeholder="info@spleet.ng"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control 
                    type="number"
                    name="phone"
                    value={formInput.phone}
                    ref={register}
                    onChange={fillForm}
                    className="form-line"
                    placeholder="+2348168090727"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Home/ Building Address</Form.Label>
              <Form.Control 
                type="text"
                name="address"
                value={formInput.address}
                ref={register}
                onChange={fillForm}
                className="form-line"
                placeholder="51, Iwaya Road, Onike, Iwaya"
              />
            </Form.Group>
          </Card>
          <Card className="invoice-card">
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Issue date</Form.Label>
                  <Form.Control 
                    type="date"
                    name="issue"
                    value={formInput.issue}
                    ref={register}
                    onChange={fillForm}
                    className="form-line"
                    placeholder="20/01/2021"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Due date</Form.Label>
                  <Form.Control 
                    type="date"
                    name="due"
                    value={formInput.due}
                    ref={register}
                    onChange={fillForm}
                    className="form-line"
                    placeholder="05/05/2021"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Invoice number</Form.Label>
                  <Form.Control 
                    type="number"
                    name="invoiceNum"
                    value={formInput.invoiceNum}
                    ref={register}
                    onChange={fillForm}
                    className="form-line"
                    placeholder="000000001"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label className="form-label">V.A.T %</Form.Label>
                  <Form.Control 
                    type="number"
                    name="vat"
                    value={formInput.vat}
                    ref={register}
                    onChange={fillForm}
                    className="form-line"
                    placeholder="7.5%"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>Service description</Form.Label>
              <Form.Control 
                type="text"
                name="description"
                value={formInput.description}
                ref={register}
                onChange={fillForm}
                className="form-line"
                placeholder="5 Bedroom Duplex post-con cleaning"
              />
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Sevice amount</Form.Label>
                  <Form.Control 
                    type="number"
                    name="amount"
                    value={formInput.amount}
                    ref={register}
                    onChange={fillForm}
                    className="form-line"
                    placeholder="NGN 45,000"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Total amount</Form.Label>
                  <Form.Control 
                    type="number"
                    name="total"
                    value={formInput.total}
                    ref={register}
                    onChange={fillForm}
                    placeholder="NGN 48,375"
                    className="total"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Card>
        </div>
        <div className="mt-4 float-right invoice-btn">
          <Button className="cancel-btn">CANCEL</Button>
          <Button 
            type="submit" 
            className="submit-btn"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Link to="/generate-invoice">CREATE INVOICE</Link>
          </Button>
        </div>
        </Form>
      </div>
      <Route path="/generate-invoice" component={GenerateInvoice} />
    </div>
  );
};

export default InvoiceForm;

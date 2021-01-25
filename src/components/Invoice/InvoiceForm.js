import React from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import './InvoiceForm.styles.css';

function InvoiceForm() {
  return (
    <div className="my-invoice">
      <div className="invoice-form">
        <Card className="invoice-card">
          <Form>
            <Form.Group>
              <Form.Label>Customer/ Company name</Form.Label>
              <Form.Control 
                type="text"
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
                className="form-line"
                placeholder="51, Iwaya Road, Onike, Iwaya"
              />
            </Form.Group>
          </Form>
        </Card>
        <Card className="invoice-card">
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Issue date</Form.Label>
                <Form.Control 
                  type="date"
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
        <Button type="submit" className="submit-btn">CREATE INVOICE</Button>
      </div>
    </div>
  );
};

export default InvoiceForm;

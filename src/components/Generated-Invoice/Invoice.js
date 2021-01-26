import React from 'react';
import './Invoice.styles.css';
import { Button, Card, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Invoice({email, name, description, amount, total, phone, issue, due, invoiceNum, vat, address}) {
  return (
    <div className="content">
      <div className="invoice">
        <Button size="sm" className="my-btn">Generate invoice</Button>
        <p className="mt-2">PREVIEW YOUR INVOICE</p>
        <Card className="invoice-info">
          <div className="invoice-item">
            <div className="d-flex flex-md-column">
              <img src='https://www.fichaya.com/fichaya.ico' alt="Logo" className="logos mb-5"/>
              <div className="mb-2">
                <p className="mb-1">FROM</p>
                <p className="mb-0"><b>FICHAYA</b></p>
                <p className="mb-0 text-dark">finance@fichaya.com</p>
                <p className="mb-0 text-dark">+234817714611</p>
              </div>
              <div className="mt-2">
                <p className="mb-1">BILL TO</p>
                <p className="mb-0 text-dark"><b>Spleet Nigeria Limited</b></p>
                <p className="mb-0 text-dark">51, Iwaya Rd, Onike, Yaba</p>
                <p className="text-dark">+2348168090727</p>
              </div>
            </div>
            <div className="d-flex flex-md-column right-side">
              <p className="mb-5">INVOICE</p>
              <div className="mb-2 right-side">
                <p className="mb-1">STATUS</p>
                <p className="mb-0 text-danger"><b>UNPAID</b></p>
              </div>
              <div className="mb-2 right-side">
                <p className="mb-0">CREATED</p>
                <p className="mb-0 text-dark">October 8, 2021</p>
              </div>
              <div className="mb-2 right-side">
                <p className="mb-0 right-side">DUE</p>
                <p className="mb-0 right-side text-dark">October 11, 2021</p>
              </div>
              <div className="mb-2">
                <p className="mb-0 right-side">AMOUNT</p>
                <p className="mb-0 right-side text-dark">NGN 48,375</p>
              </div>
            </div>
          </div>
          <div className="receipt">
            <Table responsive="md" className="my-table">
              <thead className="tableHead">
                <tr>
                  <th style={{width: '35%'}}>DESCRIPTION</th>
                  <th style={{width: '15%'}}>QTY</th>
                  <th style={{width: '30%'}}>UNIT PRICE</th>
                  <th style={{width: '20%'}}>AMOUNT</th>
                </tr>
              </thead>
              <tbody className="tableBody pt-2">
                <tr>
                  <td>5, Bedroom Duplex post-con cleaning</td>
                  <td>1</td>
                  <td>NGN 45,000</td>
                  <td>NGN 45,000</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="main-width">
            <div className="totalDiv float-right">
              <div className="subTotal pt-2">
                <p className="mb-1">SUB-TOTAL</p>
                <p className="mb-1 text-dark">NGN 45,000</p>
              </div>
              <div className="subTotal pt-2">
                <p className="mb-1">VAT (7.5%)</p>
                <p className="mb-1 text-dark">NGN 3,375</p>
              </div>
              <div className="subTotal subTotal3 pt-2">
                <p className="mb-1">TOTAL</p>
                <p className="mb-1 text-dark">NGN 48,375</p>
              </div>
            </div>
          </div>
        </Card>
        <div className="invoice-button mt-4">
          <Button className="back-btn"><Link to="/invoice">GO BACK </Link></Button>
          <Button className="send-btn">
            SEND TO CUSTOMER
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Invoice;

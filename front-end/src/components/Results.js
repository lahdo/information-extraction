import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class Results extends Component {
    render() {
        return (
            this.props.showResults ?
            <div>
                <h3 className="appTitle"><strong>Results</strong></h3>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>PO Date</td>
                        <td>01.02.2015</td>
                    </tr>
                    <tr>
                        <td>Delivery Address</td>
                        <td>ul. Bora-Komorowskiego 12/2</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>1,252.00</td>
                    </tr>
                    </tbody>
                </Table>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Item name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Item 1</td>
                        <td>25.00</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Item 2</td>
                        <td>68.00</td>
                        <td>122</td>
                    </tr>
                    <tr>
                        <td>Item 3</td>
                        <td>1,004.00</td>
                        <td>567</td>
                    </tr>
                    </tbody>
                </Table>
            </div> : null
        );
    }
}

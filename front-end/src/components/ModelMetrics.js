import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

export default class ModelMetrics extends Component {
    render() {
        return (
            this.props.showResults ?
                <div>
                <h3 className="appTitle">More about this Machine Learning model</h3>
                <p>Model was trained on 1000 documents. It's based on MITIE library. You can find
                    all model metrics below:</p>
                <Table striped bordered condensed hover>
                    <thead>
                    <tr>
                        <th>Field</th>
                        <th>Precision</th>
                        <th>Recall</th>
                        <th>F1</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>PO Date</td>
                        <td>97.87%</td>
                        <td>92.00%</td>
                        <td>94.85%</td>
                    </tr>
                    <tr>
                        <td>Delivery Address</td>
                        <td>88.28%</td>
                        <td>88.28%</td>
                        <td>88.28%</td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>99.35%</td>
                        <td>95.60%</td>
                        <td>97.44%</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>98.01%</td>
                        <td>94.27%</td>
                        <td>96.10%</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>92.75%</td>
                        <td>90.95%</td>
                        <td>91.84%</td>
                    </tr>
                    </tbody>
                </Table>
            </div>: null
        );
    }
}

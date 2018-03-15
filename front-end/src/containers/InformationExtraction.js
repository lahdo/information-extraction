import React, {Component} from 'react';

import '../App.css';
import {Col, Grid, Row, Button, Table} from "react-bootstrap";

export default class AppsView extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div >
                <Grid>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <h3 className="appTitle">How does it work</h3>
                            <p>This application can extract required fields from
                                unstructured readable / non-readable PDF documents using Machine Learning
                                algorithms.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <h3 className="appTitle">1. Prepare document file</h3>
                            <p>Please download <a href="blank">template</a> fill it with data, and save it as PDF.</p>
                            <p>You can also download ready, example documents which our model was not trained on:</p>
                            <ul>
                                <li><a href="blank">Document 1</a></li>
                                <li><a href="blank">Document 2</a></li>
                                <li><a href="blank">Document 3</a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <h3 className="appTitle">2. Upload document (in PDF format)</h3>
                            <div className="main-buttons">
                                <Button bsStyle="primary"
                                        onClick={ this.props.onMainButtonClick }>
                                    Upload document
                                </Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} mdOffset={0}>
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
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8} mdOffset={0}>
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
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

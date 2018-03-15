import React, {Component} from 'react';

import '../App.css';
import {Col, Grid, Row} from "react-bootstrap";

import ModelMetrics from "../components/ModelMetrics";
import Info from "../components/Info";
import Documents from "../components/Documents";
import Upload from "../components/Upload";
import Results from "../components/Results";
import Spinner from "../components/Spinner";


export default class AppsView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            document: '',
            showResults: false,
            showSpinner: false,
        };

        this.setSpinner = this.setSpinner.bind(this);
    }

    setSpinner(value) {
        this.setState({"showSpinner": value});
    }

    render() {
        return (
            <div>
                <Spinner showSpinner={ this.state.showSpinner }/>
                <Grid>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Info/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Documents/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Upload
                                setSpinner={ this.setSpinner }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} mdOffset={0}>
                            <Results
                                showResults={ this.state.showResults }
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8} mdOffset={0}>
                            <ModelMetrics
                                showResults={ this.state.showResults }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

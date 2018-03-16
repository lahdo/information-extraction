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
            results: {},
            showResults: false,
            showSpinner: false,
        };

        this.setSpinner = this.setSpinner.bind(this);
        this.setResults = this.setResults.bind(this);
        this.uploadAnother = this.uploadAnother.bind(this);
    }

    setSpinner(value) {
        this.setState({"showSpinner": value});
    }

    setResults(value) {
        this.setState({"results": value});
        this.setState({"showResults": true});
    }

    uploadAnother() {
        this.setState({"results": {}});
        this.setState({"showResults": false});
    }

    render() {
        return (
            <div>
                <Spinner showSpinner={ this.state.showSpinner }/>
                <Grid>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Info />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Documents
                                showResults={ this.state.showResults }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Upload
                                showResults={ this.state.showResults }
                                setSpinner={ this.setSpinner }
                                setResults={ this.setResults }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} mdOffset={0}>
                            <Results
                                results={ this.state.results }
                                showResults={ this.state.showResults }
                                uploadAnother={ this.uploadAnother }
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

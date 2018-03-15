import React, {Component} from 'react';

import '../App.css';
import {Col, Grid, Row} from "react-bootstrap";

import ModelMetrics from "../components/ModelMetrics";
import Info from "../components/Info";
import Documents from "../components/Documents";
import Upload from "../components/Upload";
import Results from "../components/Results";


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
                            <Upload />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} mdOffset={0}>
                            <Results />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={8} mdOffset={0}>
                            <ModelMetrics />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

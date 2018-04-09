import React, {Component} from 'react';

import '../App.css';
import {Col, Grid, Row} from "react-bootstrap";

import Info from "../components/Info";
import Spinner from "../components/Spinner";
import Demo from "../components/Demo";


export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showSpinner: false,
        };
    }

    render() {
        return (
            <div>
                <Spinner showSpinner={ this.state.showSpinner }/>
                <Grid>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Demo/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Info />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

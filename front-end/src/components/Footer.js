import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <hr/>
                            <p>EPAM Systems Licensed &nbsp;&nbsp; | &nbsp;&nbsp; <strong>Marcin Rapacz, Pawel Faron, Petro Bilinskyi, Tobiasz Wojciechowski </strong>&nbsp;&nbsp; | &nbsp;&nbsp; March 2018 </p>
                            <hr/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}
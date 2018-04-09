import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import {withRouter} from 'react-router-dom';

class Demo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="demoButton">
                    <Button
                        className="testButton"
                        bsSize="large"
                        bsStyle="primary"
                        onClick={ () => this.props.history.push('/demo') }>
                        Try it yourself
                    </Button>
                </div>
            </div>
        );
    }
}

export default withRouter(Demo);

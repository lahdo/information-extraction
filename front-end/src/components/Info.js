import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Button} from "react-bootstrap";

class Info extends Component {
    render() {
        return (
            <div>
                <h3 className="appTitle">About</h3>
                <p className="info">This application extracts preselected fields from
                    unstructured readable / non-readable PDF documents using Machine Learning
                    algorithms.</p>
                <div className="diagram">
                    <img src="/imgs/diagram.png" alt="Diagram"/>
                </div>
                <h3 className="appTitle">How it works</h3>
                <p className="info">The core of this application is a custom Machine Learning model. It was trained on
                    over <span>1000</span> example documents –
                    invoices from various customers in <span>3 different templates</span>. All documents were tagged to teach model
                    which information
                    we want to extract and where it is positioned in each template.</p>
                <div className="explainer diagram">
                    <img src="/imgs/explainer.gif" alt="Diagram"/>
                </div>
                <p className="info">At the first stage of the extraction process document is converted to an image.
                    In the next step this image is converted to unified text using OCR.
                    Finally required data is extracted from document and presented in a form of a table. </p>
                <p className="info">In real-world case this data would be entered to some ERP system like SAP or
                    Salesforce.
                    This will save a lot of time of human worker
                    who would otherwise need to extract and enter this data manually.</p>

                <hr className="customLine"/>

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

export default withRouter(Info);

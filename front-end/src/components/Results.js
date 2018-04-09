import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import CustomTable from "./CustomTable";

export default class Results extends Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
        this.renderFields = this.renderFields.bind(this);
    }

    renderList(items, field, i) {
        field = field.replace(/_/g, " ");
        return (
            <div key={i}>
                <p><strong className="attribute-list">{field}:</strong></p>
                <CustomTable data={items}/>
            </div>
        );
    }

    renderFields(item, field, i) {
        field = field.replace(/_/g, " ");

        return (
            <div key={i}>
                <p><strong className="attribute">{field}:</strong><em> {item}</em></p>
            </div>
        )
    }

    render() {
        return (
            this.props.showResults ?
                <div>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <Button
                                bsSize="large"
                                bsStyle="success"
                                onClick={ this.props.uploadAnother }>
                                Upload another document
                            </Button>
                            <hr className="customLine"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} mdOffset={0}>
                            <h3 className="appTitle"><strong>Extracted data:</strong></h3>
                            {
                                Object.keys(this.props.results).map(function (field, i) {
                                    if (Array.isArray(this.props.results[field])) {
                                        return this.renderList(this.props.results[field], field, i);
                                    }
                                    else {
                                        return this.renderFields(this.props.results[field], field, i)
                                    }
                                }, this)
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <hr className="customLine"/>
                            <Button
                                bsSize="large"
                                bsStyle="success"
                                onClick={ this.props.uploadAnother }>
                                Upload another document
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} mdOffset={0}>
                            <h3 className="appTitle"><strong>Original document:</strong></h3>
                            <object data={ this.props.file } type='application/pdf' width="100%" height="1150px"/>
                        </Col>
                    </Row>
                </div> : null
        );
    }
}

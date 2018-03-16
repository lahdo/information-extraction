import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import CustomTable from "./CustomTable";

export default class Results extends Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
        this.renderFields = this.renderFields.bind(this);
    }

    renderList(items, field, i) {
        return (
            <div key={i}>
                <strong>{field}:</strong>
                <CustomTable data={items}/>
            </div>
        );
    }

    renderFields(item, field, i) {
        return (
            <div key={i}>
                <p><strong>{field}:</strong><em> {item}</em></p>
            </div>
        )
    }

    render() {
        return (
            this.props.showResults ?
                <div>
                    <hr/>
                    <h3 className="appTitle"><strong>Results</strong></h3>
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
                    {/*<Table striped bordered condensed hover>*/}
                        {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>Field</th>*/}
                            {/*<th>Value</th>*/}
                        {/*</tr>*/}
                        {/*</thead>*/}
                        {/*<tbody>*/}
                        {/*<tr>*/}
                            {/*<td>PO Date</td>*/}
                            {/*<td>01.02.2015</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                            {/*<td>Delivery Address</td>*/}
                            {/*<td>ul. Bora-Komorowskiego 12/2</td>*/}
                        {/*</tr>*/}
                        {/*<tr>*/}
                            {/*<td>Total</td>*/}
                            {/*<td>1,252.00</td>*/}
                        {/*</tr>*/}
                        {/*</tbody>*/}
                    {/*</Table>*/}
                    <Button
                        bsStyle="success"
                        onClick={ this.props.uploadAnother }>
                        Upload another document
                    </Button>
                </div> : null
        );
    }
}

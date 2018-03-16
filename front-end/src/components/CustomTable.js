import React, {Component} from 'react';
import TableRow from "./TableRow";

import {Table} from 'react-bootstrap';
import TableHead from "./TableHead";

export default class CustomTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <TableHead data={this.props.data}/>
                <tbody>
                {
                    this.props.data.map((row,i) => {
                            return (
                                <TableRow row={row} key={i}/>
                            )
                        }
                    )
                }
                </tbody>
            </Table>
        );
    }
}

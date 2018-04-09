import React, {Component} from 'react';
import TableRow from "./TableRow";

import {Table} from 'react-bootstrap';
import TableHead from "./TableHead";

export default class CustomTable extends Component {
    constructor(props) {
        super(props);

        this.transfromedData = [];

        this.props.data.map((row, i) => {
                let new_row = Object.assign(
                    {},
                    ...Object.keys(row).map(key => (
                            {
                                [this.fix_key(key)]: row[key]
                            }
                        )
                    )
                );
                this.transfromedData.push(new_row);
            }
        )
    }

    fix_key(key) {
        return key.replace(/_/g, " ");
    }

    render() {
        return (
            <Table striped bordered condensed hover>
                <TableHead data={this.transfromedData}/>
                <tbody>
                {
                    this.transfromedData.map((row, i) => {
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

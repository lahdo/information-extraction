import React, {Component} from 'react';

export default class TableRow extends Component {
    render() {
        return (
            <tr>
                {
                    Object.keys(this.props.row).map(function (field, i) {
                        return (
                            <td key={i}>
                                {
                                    this.props.row[field]
                                }
                            </td>
                        )
                    }, this)
                }
            </tr>
        );
    }
}

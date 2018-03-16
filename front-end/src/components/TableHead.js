import React, {Component} from 'react';

export default class TableHead extends Component {
    render() {
        return (
            <thead>
            <tr>
                {
                    Object.keys(this.props.data[0]).map(function (itemField, i) {
                        return (<th key={i}>{itemField}</th>);
                    })
                }
            </tr>
            </thead>
        );
    }
}

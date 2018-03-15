import React, {Component} from 'react';

export default class Info extends Component {
    render() {
        return (
            <div>
                <h3 className="appTitle">1. Prepare document file</h3>
                <p>Please download <a href="blank">template</a> fill it with data, and save it as PDF.</p>
                <p>You can also download ready, example documents which our model was not trained on:</p>
                <ul>
                    <li><a href="blank">Document 1</a></li>
                    <li><a href="blank">Document 2</a></li>
                    <li><a href="blank">Document 3</a></li>
                </ul>
            </div>
        );
    }
}

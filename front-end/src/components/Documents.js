import React, {Component} from 'react';

export default class Documents extends Component {
    render() {
        return (
            !this.props.showResults ?
                <div>
                    <h3 className="appTitle">1. Prepare document file</h3>
                    <p>Please download <a href="./files/template.txt">template</a> document, fill it with data and save
                        it as PDF.</p>
                    <p>You can also download ready, example documents which our model was not trained on:</p>
                    <ul>
                        <li><a href="./files/document1.txt">Document 1</a></li>
                        <li><a href="./files/document2.txt">Document 2</a></li>
                        <li><a href="./files/document3.txt">Document 3</a></li>
                    </ul>
                </div> : null
        );
    }
}

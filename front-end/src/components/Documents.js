import React, {Component} from 'react';

export default class Documents extends Component {
    render() {
        return (
            !this.props.showResults ?
                <div>
                    <h3 className="appTitle">1. Prepare document file</h3>
                    <p>Please download one of these templates and create new invoice based on it. Fill it with data and save
                        it as PDF.</p>
                    <ul>
                        <li><a href="./files/template1.docx">Template A</a></li>
                        <li><a href="./files/template2.docx">Template B</a></li>
                        <li><a href="./files/template3.docx">Template C</a></li>
                    </ul>
                    <p>Alternatively download one of these ready-to-use, example documents which our model was not trained on:</p>
                    <ul>
                        <li><a href="./files/document1.pdf">Invoice based on template A</a></li>
                        <li><a href="./files/document2.pdf">Invoice based on template B</a></li>
                        <li><a href="./files/document3.pdf">Invoice based on template C</a></li>
                    </ul>
                </div> : null
        );
    }
}

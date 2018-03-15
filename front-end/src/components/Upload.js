import React, {Component} from 'react';
import {Button, FormGroup, FormControl} from "react-bootstrap";
import * as api from '../utils/api.js'

export default class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            document: '',
            file: {},
            results: [],
            showResults: false,
            showSpinner: false,
        };

        this.setSpinner = this.setSpinner.bind(this);
        this.onUploadButtonClick = this.onUploadButtonClick.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.extractInformation = this.extractInformation.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getBase64 = this.getBase64.bind(this);
    }

    setSpinner(value) {
        this.setState({"showSpinner": value});
    }

    onChange(e) {
        this.setState({"file": e.target.files[0]});
    }

    onUploadButtonClick(e) {
        e.preventDefault(); // Stop form submit
        this.fileUpload(this.state.file);
    }

    getBase64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            console.log(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    fileUpload(file) {
        const formData = new FormData();
        formData.append('data', this.getBase64(file), {filename: file.name});

        return this.extractInformation(formData)
    }

    extractInformation(formData) {
        this.setState({"showSpinner": true});
        api.uploadDocument(formData).then(
            response => response // response => response.json()
        ).then(
            results => {
                this.setState({'results': results});
            }
        )
    }

    render() {
        return (
            <div>
                <h3 className="appTitle">2. Upload document (in PDF format)</h3>
                <div className="main-buttons">
                    <form>
                        <FormGroup controlId="formControlsFile">
                            <FormControl
                                onChange={this.onChange}
                                bsStyle="primary"
                                type="file"/>
                        </FormGroup>
                        <Button type="submit"
                                bsStyle="primary"
                                onClick={ this.onUploadButtonClick }>
                            Upload document
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

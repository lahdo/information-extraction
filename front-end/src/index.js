import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import InformationExtraction from "./containers/InformationExtraction";
import Main from "./containers/Main";

import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

import './index.css';
import './bootstrap.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render((
        <Router>
            <Layout>
                <NavigationBar />
                <Route exact
                       name="main"
                       path="/"
                       component={Main}/>
                <Route exact
                       name="informationExtraction"
                       path="/demo"
                       component={InformationExtraction}/>
                <Footer />
            </Layout>
        </Router>
    ),
    document.getElementById('root')
);

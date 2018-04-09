import fetch from 'isomorphic-fetch';

import {testResults} from '../constants';

const SERVER = 'http://127.0.0.1:8000';
const VERSION = '/api/v1/';
const BASE = SERVER + VERSION;
const ENDPOINTS = {
    'information-extraction': 'information-extraction/'
};

function getApiAddress(endpoint) {
    return BASE + endpoint;
}

function fetchData(endpoint, body) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return fetch(`${endpoint}`, {
        method: 'POST',
        body: body,
        headers: myHeaders
    });
}

function makeRequest(endpoint) {
    return function(searchObject) {
        const url = getApiAddress(endpoint);

        return fetchData(url, searchObject)
    };
}

function makeFakeRequest(endpoint) {
    return function() {
        return new Promise(function(resolve, reject) {
            // console.log(testResults[0]);
            //resolve(JSON.stringify(testResults[Math.floor(Math.random() * 50) + 1  ]));
            resolve(JSON.stringify(testResults[0]));
        }.bind(this));
    };
}

export const uploadDocument = makeFakeRequest(ENDPOINTS['information-extraction']);
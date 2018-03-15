import fetch from 'isomorphic-fetch';

const SERVER = 'http://127.0.0.1:8000';
const VERSION = '/api/v1/';
const BASE = SERVER + VERSION;
const ENDPOINTS = {
    'information-extraction': 'information-extraction/'
};

function getApiAddress(endpoint) {
    return BASE + endpoint;
}

function fetchData(endpoint, searchObject) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return fetch(`${endpoint}`, {
        method: 'POST',
        body: JSON.stringify(searchObject),
        headers: myHeaders
    });
}

function makeRequest(endpoint) {
    return function(searchObject) {
        const url = getApiAddress(endpoint);

        return fetchData(url, searchObject)
    };
}

export const uploadDocument = makeRequest(ENDPOINTS['information-extraction']);
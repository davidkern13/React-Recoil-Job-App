import {
    selector
} from "recoil";

import { FETCH_DATA } from './enum';

const BASE_URL = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

export const fetchSelector = selector({
    key: FETCH_DATA,
    async get() {
        return fetch(BASE_URL)
        .then(response =>  response.json())
        .then(res => {
           return res;
        }).catch( e => e );
    }
});
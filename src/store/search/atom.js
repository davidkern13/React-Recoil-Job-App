import {
    atom
} from "recoil";

import { SEARCH_JOB } from './enums';

export const inputSearch = atom({
    key: SEARCH_JOB,
    default: '',
});

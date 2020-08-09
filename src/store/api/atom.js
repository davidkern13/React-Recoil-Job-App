import {
    atom
} from "recoil";

import { DATA_STATE } from './enum';
import { fetchSelector } from './selector';

export const stateWithAsyncDefault = atom({
    key: DATA_STATE,
    default: fetchSelector,
});

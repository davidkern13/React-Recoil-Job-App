import React from 'react';
import {
    atom,
    useRecoilValue,
    useRecoilState,
    selector
} from "recoil";

import './style.scss';

import { inputSearch } from '../../store/search/atom'

const Search = () => {

    const [item, setItemValue] = useRecoilState(inputSearch);

    const handleChange = (e) => {
        let { target : {value}} = e;
        setItemValue(value);
    }

    return (
        <div className={'Search'}>
            <input type="text" value={item.text} onChange={handleChange} placeholder="Search jobs…"/>
        </div>
    )
}

export default  React.memo(Search);
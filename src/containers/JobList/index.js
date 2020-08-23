import React from 'react';
import {
    atom,
    useRecoilValue,
    useRecoilState,
    selector,
    useRecoilValueLoadable
} from "recoil";

const JobList = () => {

    const stateWithAsyncDefaultLoadable = renderArticles(useRecoilValueLoadable(stateWithAsyncDefault));

    console.log('stateWithAsyncDefaultLoadable', stateWithAsyncDefaultLoadable);

    return (
        <div>
            
        </div>
    )
}

export default  React.memo(JobList);
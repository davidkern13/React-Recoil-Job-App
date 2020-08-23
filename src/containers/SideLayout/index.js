import React from 'react';
import './style.scss';
import Checkbox from '../Checkbox';

import { jobCategory, jobLevel, jobCategoryResult, jobLevelResult} from '../../store/checkbox/atom';

const SideLayout = () => {

    return (
        <div className={'Listwrap'}>
            <h3>Category</h3>
            <Checkbox 
              atom={jobCategory}
              atomResult={jobCategoryResult}
            />
            <h3>Experience level</h3>
             <Checkbox 
              atom={jobLevel}
              atomResult={jobLevelResult}
            />
        </div>
  
    )
}

export default SideLayout;
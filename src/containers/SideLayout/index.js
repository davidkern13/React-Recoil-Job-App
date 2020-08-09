import React from 'react';

import Checkbox from '../Checkbox';

import { jobCategory, jobLevel, jobCategoryResult, jobLevelResult} from '../../store/checkbox/atom';

const SideLayout = () => {

    return (
        <div>
            <p>Category</p>
            <Checkbox 
              atom={jobCategory}
              atomResult={jobCategoryResult}
            />
            <p>Experience level</p>
             <Checkbox 
              atom={jobLevel}
              atomResult={jobLevelResult}
            />
        </div>
  
    )
}

export default SideLayout;
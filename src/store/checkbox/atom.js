import {
    atom,
    atomFamily,
    selectorFamily
} from "recoil";

import { JOBS_CATEGORY, JOBS_LEVEL, JOBS_CATEGORY_RESULT, JOBS_LEVEL_RESULT, CHECK_BOX_LIST } from './enums';
import { checkBoxList } from '../../enums/Checkbox';

export const jobCategory = atom({
    key: JOBS_CATEGORY,
    default: checkBoxList(JOBS_CATEGORY)
});
export const jobLevel = atom({
    key: JOBS_LEVEL,
    default: checkBoxList(JOBS_LEVEL)
});
  
export const jobCategoryResult = atom({
    key: JOBS_CATEGORY_RESULT,
    default: [],
});

export const jobLevelResult = atom({
    key: JOBS_LEVEL_RESULT,
    default: [],
});
  
export const listJobType = atomFamily({
    key:CHECK_BOX_LIST,
    default: selectorFamily({
        key: CHECK_BOX_LIST + '/Default',
        get: param => ({get}) => {
        let [a, b] = param;
        return {
                label: get(b)[a] || '',
                selected: false
            }    
        },
    }),
})


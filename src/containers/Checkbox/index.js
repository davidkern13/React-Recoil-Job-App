import React from 'react';
import _ from 'lodash';
import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from "recoil";

import './style.scss';

import { listJobType } from '../../store/checkbox/atom';

const ListItem = ({ index, atom, atomResult }) => {
  const [listItemValue, setListItemValue] = useRecoilState(listJobType([index, atom]));
  const setNamesState = useSetRecoilState(atomResult);

  console.log('listItemValue', listItemValue);

  const handleClick = e => {
    let { target : { checked } } = e;
    setListItemValue({...listItemValue, selected:checked});
    setNamesState(oldvalue => [...oldvalue, index]);
  }

  return (
    <li>    
      <input type='checkbox' checked={listItemValue.selected} onChange={handleClick}/>
      <label>{listItemValue.label}</label>
    </li>
  );
};

const Checkbox = ({atom, atomResult}) => {
  let listJobTypesValue = useRecoilValue(atom);

  return (
    <div className={'Sidelist'}>
       <ul className={'Sidelist__ul'}>
        {_.times(listJobTypesValue.length, (i) => (   
            <ListItem 
              key={i}
              index={i}
              atom={atom}
              atomResult={atomResult}
            />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(Checkbox);
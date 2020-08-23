import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import { theme } from '../../store/theme/atom';

import './style.scss';

const ThemeMode = () => {

    const [themeMode, setThemeMode] = useRecoilState(theme);

    useEffect(() => {
   
      
          const bodyEl = document.querySelector('body');
          console.log('themeMode');
          themeMode ? bodyEl.classList.add('dark') : bodyEl.classList.remove('dark');
        
    
      }, [themeMode]);

    return (
        <div className="switch-container">
            <label>
                <input type="checkbox" name={'swicher'} checked={themeMode || false} onChange={ () => setThemeMode(!themeMode) } className={`${ themeMode ? 'light' : 'dark' } switch`}/>
                <div>
                    <div></div>
                </div>
            </label>
        </div>
    );
}

export default React.memo(ThemeMode);
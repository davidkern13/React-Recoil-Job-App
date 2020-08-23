import React from 'react';

import './style.scss';

import ThemeMode from '../../lib/theme-mode';

function Navigation(){

    return (
        <nav className={'Navigation'}>
            <ul>
                Logo
            </ul>
            <ul>
                <ThemeMode />
            </ul>
        </nav>
    )
}

export default Navigation;
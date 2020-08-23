import React from 'react';
import './style.scss';

import JobList from '../JobList';
import Search from '../Search';
import Test from '../Test';

import SideLayout from '../SideLayout';
import Navigation from '../Navigation';

const Main = () => {

    return (
        <div className={'Main'}>
          <Navigation />
          <div className={'Main__wrap-container'}>
            <div className={'Main__wrap-container__sidebar'}>
              <SideLayout />
            </div>
            <div className={'Main__wrap-container__center'}>
              <Search />
              <JobList />
              <Test />
            </div>
            
          </div>
        </div>
    )
}

export default Main;
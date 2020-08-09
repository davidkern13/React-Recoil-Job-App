import React from 'react';

import JobList from '../JobList';
import Search from '../Search';
import Test from '../Test';

import SideLayout from '../SideLayout';

const Main = () => {

    return (
        <div>
          <div>
            <Search />
            <JobList />
            <Test />
          </div>
          <div>
            SideLayout

            <SideLayout />
          </div>
        </div>
    )
}

export default Main;
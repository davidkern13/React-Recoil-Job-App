import React from 'react';

import Jobs from '../Jobs';
import Search from '../Search';
import Test from '../Test';

import SideLayout from '../SideLayout';

const Main = () => {

    return (
        <div>
          <div>
            <Search />
            <Jobs />
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
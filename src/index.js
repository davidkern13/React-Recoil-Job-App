import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from "recoil";

import './wdyr';
import 'react-hot-loader';
import {hot} from 'react-hot-loader/root';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const HotApp = hot(App);

ReactDOM.render(
  <RecoilRoot>
    <HotApp />
  </RecoilRoot>,


  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

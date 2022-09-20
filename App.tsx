import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store';
import Router from './Router';
import './i18n';

const App = () => {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
};

export default App;

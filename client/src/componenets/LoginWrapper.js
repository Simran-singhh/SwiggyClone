import React from 'react';
import { Provider } from 'react-redux';

import appStore from '../utils/appStore';
import Login from '../componenets/Login';

const LoginWrapper = () => {
  return (
    <Provider store={appStore}>
      
        <Login />
      
    </Provider>
  );
};

export default LoginWrapper;
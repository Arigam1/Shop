import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import DeviceStore from './store/DeviceStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)
console.log(process.env.REACT_APP_APP_URL)

ReactDOM.render(
  <BrowserRouter>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
    }}>
      <App />
    </Context.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
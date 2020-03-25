import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './components/header/header.component';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} /> 
        <Route path='/signin' component={SignInSignUpPage} /> 
      </Switch>
    </div>
  );
}

export default App;

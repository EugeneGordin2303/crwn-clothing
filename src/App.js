import React from 'react';
import {Route,Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import {default as Header} from './components/header/header.container';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';
import CheckoutPage from './components/pages/checkout/checkout.component.jsx';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if (userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id:snapshot.id,
              ...snapshot.data()
          });
        });
      }
        
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/checkout' component={CheckoutPage} /> 
          <Route path='/shop' component={ShopPage} /> 
          <Route exact path='/signin' render={() =>
            this.props.currentUser ? (
              <Redirect to='/' />
            ) : (
              <SignInSignUpPage/>
            )
          } /> 
        </Switch>
      </div>
    )
  };
}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch =>  ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps)(App);

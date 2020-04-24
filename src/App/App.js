import React from 'react';
import {Route,Switch, Redirect} from 'react-router-dom';

import './App.css';

import {default as Header} from '../components/header/header.container';
import HomePage from '../components/pages/homepage/homepage.component';
import ShopPage from '../components/pages/shop/shop.component';
import SignInSignUpPage from '../components/pages/sign-in-sign-up/sign-in-sign-up.component';
import {default as CheckoutPage} from '../components/pages/checkout/checkout.container';

import {auth, createUserProfileDocument} from '../firebase/firebase.utils';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './components/header/header.component';

import './App.css';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import SignInSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null,
      someParam:''
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

      if (userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          }, () => console.log('app.js state onSnapShot:',this.state))
        });
      }
      else{
        this.setState({
          currentUser:userAuth
        })
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route path='/shop' component={ShopPage} /> 
          <Route path='/signin' component={SignInSignUpPage} /> 
        </Switch>
      </div>
    )
  };
}

export default App;

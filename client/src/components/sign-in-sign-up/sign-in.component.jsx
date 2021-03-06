import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle, auth} from '../../firebase/firebase.utils';
import {
    SignInContainer,
    ButtonsBarContainer,
    SignInTitle} from './sign-in.styles.jsx';

class SignIn extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:'' }); // clean the creds after sing in

        } catch (err) {
            console.log(err);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]:value})
    }

    render(){
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required/>
                    <FormInput 
                        name='password'
                        type='password'
                        label='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />

                    <ButtonsBarContainer>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }

};

export default SignIn;
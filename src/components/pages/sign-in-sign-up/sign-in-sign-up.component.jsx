import React from 'react';

import SignIn from '../../sign-in-sign-up/sign-in.component';
import SignUp from '../../sign-in-sign-up/sign-up.component';

import {SignInAndSignUpContainer} from './sign-in-sign-up.styles';

const SignInSignUpPage = () => (

    <SignInAndSignUpContainer>
        <SignIn/>
        <SignUp/>
    </SignInAndSignUpContainer>

);

export default SignInSignUpPage;
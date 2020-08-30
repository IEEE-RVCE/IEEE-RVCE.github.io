import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';

// Example page for now only containing header
export default function SignInPage(props) {
    return(
        <React.Fragment>
            <Header/>
            <SignIn/>
            <Footer/>
        </React.Fragment>
    )
}
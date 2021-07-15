import React, { useState } from 'react';
import './authenticate-section.scss';

import PropTypes from 'prop-types';
import axios from '../../Adapters/axios/axios-fetch-dreams';

import Button from '../UI/button/button';
//import FormControl from './form-control';

import apiKey from '../../config/globals/apiKey';

const AuthenticateSection = ({ formControlsArray }) => {

    const [isLogin, setIsLogin] = useState(true);
    const authInputPackage = {
        email: '',
        password: '',
        returnSecureToken: true,
    };

    const inputValueHandler = (id, value) => {
            authInputPackage[id] = value;
    };

    const formSubmissionHandler = event => {
        event.preventDefault();
        console.log(authInputPackage);
        let url = '';
        if (isLogin) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
        } else {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
        }
        axios.post(url, authInputPackage);
    };

    const actionHandler = event => {
        //event.preventDefault();
        setIsLogin(!isLogin);
    };

    return (
        <section className='auth-section'>
            <div className='container'>
                <form onSubmit={formSubmissionHandler}>
                    <div className='END-section__form-controls'>
                        {/* {formControlsArray.map(el => <FormControl key={el.id} elementData={el} passInputValue={inputValueHandler}/>)} */}
                    </div>
                    <div className='END-section__form-actions'>
                        <Button type='submit'>
                            {isLogin ? 'Login' : 'Create new account'}
                        </Button>
                        <button type='button' onClick={actionHandler}> {isLogin ? 'Create new account' : 'Login'} </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

// EnterNewDreamSection.propTypes = {
//     formControlsArray: PropTypes.arrayOf (
//         PropTypes.shape({
//             inputType: PropTypes.string.isRequired,
//             id: PropTypes.string.isRequired,
//             labelText: PropTypes.string.isRequired,
//             placeholderText: PropTypes.string,
//             hintText: PropTypes.string
//         })
//     )
// };


export default AuthenticateSection;

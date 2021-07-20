import React, { useState } from 'react';
import './authenticate-section.scss';

import PropTypes from 'prop-types';
//import axiosAuth from '../../Adapters/axios/axios-auth';

import { authentication } from '../../store/actions/auth-reducer-actions/auth-action-creators';
import { connect } from 'react-redux';

import Button from '../UI/button/button';
import FormControl from '../new-dream/form-control';

import apiKey from '../../config/globals/apiKey';

const AuthenticateSection = ({ authFormControls, onSubmitDispatch }) => {

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
        onSubmitDispatch(url, authInputPackage);
    };

    const actionHandler = event => {
        setIsLogin(!isLogin);
    };

    return (
        <section className='auth-section'>
            <div className='container'>
                <form onSubmit={formSubmissionHandler}>
                    <div className='auth-section__form-controls'>
                        {authFormControls.map(el => <FormControl key={el.id} elementData={el} passInputValue={inputValueHandler}/>)}
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

const mapDispatchToProps = dispatch => {
    return {
        onSubmitDispatch: (url, inputPackage) => dispatch(authentication(url, inputPackage))
    };
};

export default connect(null, mapDispatchToProps)(AuthenticateSection);

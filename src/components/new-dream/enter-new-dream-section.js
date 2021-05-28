import React from 'react';
import PropTypes from 'prop-types';
import axios from '../../Adapters/axios/axios-fetch-dreams';
import './enter-new-dream-section.scss';

import Button from '../UI/button/button';
import FormControl from './form-control';

const EnterNewDreamSection = ({ formControlsArray }) => {

    const currentDate = new Date();
    const dateDefaultValue = currentDate.toISOString().split('T')[0];

    const newDreamPackage = {
        content: '',
        description: '',
        title: '',
        date: dateDefaultValue
    };

    const inputValueHandler = (id, value) => {
            newDreamPackage[id] = value;
    };

    const formSubmissionHandler = event => {
        event.preventDefault();
        console.log(newDreamPackage);
        axios.post('https://react-dreamstracker-default-rtdb.firebaseio.com/dreams.json', newDreamPackage);
    };

    return (
        <section className='END-section'>
            <div className='container'>
                <form onSubmit={formSubmissionHandler}>
                    <div className='END-section__form-controls'>
                        {formControlsArray.map(el => <FormControl key={el.id} elementData={el} passInputValue={inputValueHandler}/>)}
                    </div>
                    <div className='END-section__form-actions'>
                        <Button>Submit new dream</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

EnterNewDreamSection.propTypes = {
    formControlsArray: PropTypes.arrayOf (
        PropTypes.shape({
            inputType: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            forLabel: PropTypes.string.isRequired
        })
    )
};
 
export default EnterNewDreamSection;

import React from 'react';
import PropTypes from 'prop-types';
import axios from '../../Adapters/axios/axios-fetch-dreams';
import './enter-new-dream-section.scss';

import repackingSelectDate from '../../helpers/repacking-select-date';

import Button from '../UI/button/button';
import FormControl from './form-control';

const EnterNewDreamSection = ({ formControlsArray }) => {

    // this helper returns array with numbers from 1 to 31
    // I will make this a real date object, but I am not interested in doing this now
    const selectDate = repackingSelectDate(formControlsArray[0].numberOfDays);
    // now I'm gonna set this array as value of 'names' property of the first object, so it can be 
    // rendered as regular selectElement array member
    formControlsArray[0].names = selectDate;

    const date = new Date();
    const dateDefaultValue = date.toISOString().split('T')[0];

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

// EnterNewDreamSection.propTypes = {
//     inputElements: PropTypes.arrayOf (
//         PropTypes.shape({
//             inputType: PropTypes.string.isRequired,
//             id: PropTypes.string.isRequired,
//             forLabel: PropTypes.string.isRequired
//         })
//     ).isRequired,
//     selectElements: PropTypes.arrayOf (
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             names: PropTypes.arrayOf (
//                 PropTypes.shape({
//                     id: PropTypes.string.isRequired,
//                     value: PropTypes.string.isRequired
//                 })
//             ),
//             numberOfDays: PropTypes.number
//         })
//     ).isRequired
// };
 
export default EnterNewDreamSection;

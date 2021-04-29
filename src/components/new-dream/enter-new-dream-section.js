import React, { useState } from 'react';
import PropTypes from 'prop-types';

import repackingSelectDate from '../../helpers/repacking-select-date';

import Button from '../UI/button/button';
import SelectElement from './select-element';

const EnterNewDreamSection = ({ inputElements, selectElements }) => {
    const { daysOfMonth, months, days } = selectElements;

    // this helper returns array with numbers from 1 to 31
    // I will make this a real date object, but I am not interested in doing this now
    const selectDate = repackingSelectDate(daysOfMonth);

    const [ inputTest, setInputTest ] = useState('');
    const [ blurCheckFailed, howIsBlurDoing ] = useState(false);
    
    const inputValidity = inputTest.trim() !== '';
    const inputValidityWhole = !inputValidity && blurCheckFailed;

    const titleInputChangeHandler = event => {
        setInputTest(event.target.value);

    };

    const blurCheck = () => {
        howIsBlurDoing(true);
    }

    const formSubmissionHandler = event => {
        event.preventDefault();
        howIsBlurDoing(true);
        if (!inputValidityWhole) {
            return;
        }
        console.log(inputTest);
        setInputTest('');
        howIsBlurDoing(false);
    };

    return (
        <section>
            <div className='container'>
                <form onSubmit={formSubmissionHandler}>
                    <div className='form-control'>
                        <div>
                            <SelectElement arrayForOutput={selectDate}/>
                            <SelectElement arrayForOutput={months}/>
                            <SelectElement arrayForOutput={days}/>
                        </div>
                        <label htmlFor='title'>Title of the dream</label>
                        <input 
                            type='text' 
                            id='title' 
                            onChange={titleInputChangeHandler}
                            onBlur={blurCheck} 
                            value={inputTest}/>
                        {inputValidityWhole && <p>Hey man, you need to have something in this input.</p>}
                        <input></input>
                        <input></input>
                    </div>
                    <div className='form-actions'>
                        <Button>Submit new dream</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

EnterNewDreamSection.propTypes = {
    selectElements: PropTypes.shape({
            daysOfMonth: PropTypes.number.isRequired,
            months: PropTypes.arrayOf (
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired
                })
            ),
            days: PropTypes.arrayOf (
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired
                })
            )
        })
};
 
export default EnterNewDreamSection;

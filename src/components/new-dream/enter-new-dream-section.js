import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../UI/button/button';
import SelectElement from './select-element';

const EnterNewDreamSection = ({ selectElements }) => {
    const { daysOfMonth, months, days } = selectElements;

    let arrayHelper = [];

    for (let i=1; i <= daysOfMonth; i++) {
        arrayHelper.push({id: `domID${i}`, value: `${i}`});    
    };

    const [ inputTest, setInputTest ] = useState('');

    const titleInputChangeHandler = event => {
        setInputTest(event.target.value);
    };

    const formSubmissionHandler = event => {
        event.preventDefault();
        console.log(inputTest);
        setInputTest('');
    };

    return (
        <section>
            <div className='container'>
                <form onSubmit={formSubmissionHandler}>
                    <div className='form-control'>
                        <div>
                            <SelectElement arrayForOutput={arrayHelper}/>
                            <SelectElement arrayForOutput={months}/>
                            <SelectElement arrayForOutput={days}/>
                        </div>
                        <label htmlFor='title'>Title of the dream</label>
                        <input type='text' id='title' onChange={titleInputChangeHandler} value={inputTest}/>
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

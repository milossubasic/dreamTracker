import React from 'react';
import PropTypes from 'prop-types';
//import axios from '../../Adapters/axios/axios-fetch-dreams';

import repackingSelectDate from '../../helpers/repacking-select-date';

import Button from '../UI/button/button';
import SelectElement from './select-element';
import InputElement from './input-element';

const EnterNewDreamSection = ({ inputElements, selectElements }) => {
    const { daysOfMonth, months, days } = selectElements;

    // this helper returns array with numbers from 1 to 31
    // I will make this a real date object, but I am not interested in doing this now
    const selectDate = repackingSelectDate(daysOfMonth);

    const newDreamPackage = {
        content: '',
        description: '',
        title: '',
        fullDate: {
            date: -1,
            day: '',
            month: ''
        }
    };

    const inputValueHandler = (id, value) => {
        newDreamPackage[id] = value;
    }

    // const [ inputTest, setInputTest ] = useState('');
    // const [ blurCheckFailed, howIsBlurDoing ] = useState(false);
    
    // const inputValidity = inputTest.trim() !== '';
    // const inputValidityWhole = !inputValidity && blurCheckFailed;

    // const titleInputChangeHandler = event => {
    //     setInputTest(event.target.value);

    // };

    // const blurCheck = () => {
    //     howIsBlurDoing(true);
    // }

    // const formSubmissionHandler = event => {
    //     event.preventDefault();
    //     howIsBlurDoing(true);
    //     if (!inputValidityWhole) {
    //         return;
    //     }
    //     console.log(inputTest);
    //     setInputTest('');
    //     howIsBlurDoing(false);
    // };

    const formSubmissionHandler = event => {
        event.preventDefault();
        console.log(newDreamPackage);
        //axios.post(package);
    };

    return (
        <section className='END-section'>
            <div className='container'>
                <form onSubmit={formSubmissionHandler}>
                    <div className='form-control'>
                        <div>
                            {/* <SelectElement arrayForOutput={selectDate} passInputValue={inputValueHandler}/>
                            <SelectElement arrayForOutput={months} passInputValue={inputValueHandler}/>
                            <SelectElement arrayForOutput={days} passInputValue={inputValueHandler}/> */}
                        </div>
                        {inputElements.map(el => <InputElement key={el.id} elementData={el} passInputValue={inputValueHandler}/>)}
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
    inputElements: PropTypes.arrayOf (
        PropTypes.shape({
            inputType: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            forLabel: PropTypes.string.isRequired
        })
    ),
    selectElements: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            numberOfDays: PropTypes.number.isRequired
        }),
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            names: PropTypes.arrayOf (
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired
                })
            )
        }),
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            names: PropTypes.arrayOf (
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired
                })
            )
        })
    )
};
 
export default EnterNewDreamSection;

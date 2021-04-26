import React from 'react';

import Button from '../UI/button/button';

const EnterNewDreamSection = () => {
    return (
        <section>
            <div className='container'>
                <form>
                    <div>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        <select>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                        </select>
                        <select>
                            <option>Monday</option>
                            <option>Tuesday</option>
                            <option>Wednesday</option>
                        </select>
                    </div>
                    <input></input>
                    <input></input>
                    <input></input>
                    <Button>Submit new dream</Button>
                </form>
            </div>
        </section>
    );
}
 
export default EnterNewDreamSection;
import React from 'react';

import Heading from '../components/layout/heading/heading'
import EnterNewDreamSection from '../components/new-dream/enter-new-dream-section';

import dataNewDream from '../data/data-new-dream';

const NewDream = () => {
    const { headContent, selectElements } = dataNewDream;
    return (
        <> 
            <Heading content={headContent}/>
            <EnterNewDreamSection selectElements={selectElements}/>
        </>
     );
}
 
export default NewDream;
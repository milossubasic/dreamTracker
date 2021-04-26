import React from 'react';

import Heading from '../components/layout/heading/heading'
import EnterNewDreamSection from '../components/new-dream/enter-new-dream-section';

import dataNewDream from '../data/data-new-dream';

const NewDream = () => {
    const { headContent } = dataNewDream;
    return (
        <> 
            <Heading content={headContent}/>
            <EnterNewDreamSection/>
        </>
     );
}
 
export default NewDream;
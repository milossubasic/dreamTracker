import React from 'react';

import Heading from '../components/layout/heading/heading'
import EnterNewDreamSection from '../components/new-dream/enter-new-dream-section';

const NewDream = () => {
    return (
        <> 
            <Heading content={{subTitle: 'Hooray, you had a new dream!'}}/>
            <EnterNewDreamSection/>
        </>
     );
}
 
export default NewDream;
import React from 'react';

import Heading from '../components/layout/heading/heading';
import ListSection from '../components/list-of-dreams/list-section';

import dataListOfDreams from '../data/data-list-of-dreams';

const ListOfDreams = () => {

    return (
        <>
            <Heading content={dataListOfDreams.headContent} />
            <ListSection />
        </>
    )
};
 
export default ListOfDreams;

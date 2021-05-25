import React from 'react';

import Heading from '../components/layout/heading/heading';
import DreamsListSection from '../components/list-of-dreams/dreams-list-section';

import dataListOfDreams from '../data/data-list-of-dreams';

const ListOfDreams = () => {
    const { headContent, listHeaderColumnNames } = dataListOfDreams;

    return (
        <>
            <Heading content={headContent} />
            <DreamsListSection columnNames={listHeaderColumnNames}/>
        </>
    )
};
 
export default ListOfDreams;

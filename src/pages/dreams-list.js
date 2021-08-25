import React from 'react';

import Heading from '../components/layout/heading/heading';
import DreamsListSection from '../components/dreams-list/dreams-list-section';

import dataDreamsList from '../data/data-dreams-list';

const DreamsList = () => {
    const { headContent, listHeaderColumnNames } = dataDreamsList;

    return (
        <>
            <Heading content={headContent} />
            <DreamsListSection columnNames={listHeaderColumnNames}/>
        </>
    )
};
 
export default DreamsList;

import React, { Component } from 'react';
import fetchDreams from '../Adapters/axios/axios-fetch-dreams';
import repackingFetchedDreams from '../helpers/repacking-fetched-dreams';

import Heading from '../components/layout/heading/heading';
import Dream from '../components/list-of-dreams/dream';

import dataListOfDreams from '../data/data-list-of-dreams';

class ListOfDreams extends Component {
    state = { 
        listOfDreams: null,
        loading: false,
        error: null
     };

    componentDidMount() {
        this.setState({loading: true});
        fetchDreams.get()
        .then ( response => {
            const dreamsArray = repackingFetchedDreams(response.data);
            this.setState({
                listOfDreams: dreamsArray,
                loading: false
            })
        })
        .catch (  error => console.log(error))
    };

    render() {
        const conditionalDreamsRendering = this.state.listOfDreams && this.state.listOfDreams.length > 0 ?
                                           this.state.listOfDreams.map(dream => <Dream key={dream.id} dreamData={dream}/>) :
                                           <div>Loading baby...</div>;   
        return (
            <>
                <Heading content={dataListOfDreams.headContent} />
                {conditionalDreamsRendering}
            </> 
         );
    };
};
 
export default ListOfDreams;

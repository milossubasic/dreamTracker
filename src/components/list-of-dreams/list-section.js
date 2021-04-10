import React, { Component } from 'react';
import fetchDreams from '../../Adapters/axios/axios-fetch-dreams';
import repackingFetchedDreams from '../../helpers/repacking-fetched-dreams';

import './list-section.scss';

import Dream from './dream';

class ListSection extends Component {
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
                                           this.state.listOfDreams.map(dream => <li key={dream.id}><Dream dreamData={dream} /></li>) :
                                           <div>Loading baby...</div>;   
        return (
            <section className='list-section'>
                <div className='container'>
                    <ul className='list-section__list'>
                        {conditionalDreamsRendering}
                    </ul>
                </div> 
            </section>
         );
    };
};
 
export default ListSection;
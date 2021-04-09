import React, { Component } from 'react';
import fetchDreams from '../Adapters/axios/axios-fetch-dreams';
import repackingFetchedDreams from '../helpers/repacking-fetched-dreams';

import Dream from '../components/list-of-dreams/dream';

class ListOfDreams extends Component {
    state = { 
        listOfDreams: null,
        loading: false
     };

    componentDidMount() {
        this.setState({loading: true});
        fetchDreams()
        .then ( response => {
            console.log(response);
            console.log(response.data);
            const dreamsArray = repackingFetchedDreams(response.data);
            console.log(dreamsArray);
            this.setState({
                listOfDreams: dreamsArray,
                loading: false
            });
            console.log(this.state.listOfDreams);
        })
    };

    render() {
        const conditionalDreamsRendering = this.state.listOfDreams && this.state.listOfDreams.length > 0 ?
                                           this.state.listOfDreams.map(dream => <Dream key={dream.id} dreamData={dream}/>) :
                                           <div>Loading baby...</div>;   
        // const conditionalDreamsRendering = this.state.listOfDreams ?
        //                                    <div>Patak Daca, barem nesto radi</div> :
        //                                    <div>Loading baby...</div>;   
        return (
            <>
                <h3>These are your dreams mate</h3>
                {conditionalDreamsRendering}
                {/* <div>Hello my baby hello my honey!</div> */}
            </> 
         );
    };
};
 
export default ListOfDreams;

import React, { Component } from 'react';
// import fetchDreams from '../../Adapters/axios/axios-fetch-dreams';
// import repackingFetchedDreams from '../../helpers/repacking-fetched-dreams';
import * as actionCreator from '../../store/actions/actionCreators';
import { connect } from 'react-redux';

import './list-section.scss';

import Dream from './dream';

class ListSection extends Component {
    state = { 
        listOfDreams: null,
        loading: false,
        error: null
     };

    componentDidMount() {
        this.props.onDidMount();
        // this.setState({loading: true});
        // fetchDreams.get()
        // .then ( response => {
        //     const dreamsArray = repackingFetchedDreams(response.data);
        //     this.setState({
        //         listOfDreams: dreamsArray,
        //         loading: false
        //     })
        // })
        // .catch (  error => console.log(error))
    };

    render() {
        const conditionalDreamsRendering = this.props.loading ? <p>Loading...</p> :
        this.props.error ? <p>{this.props.error}</p> :
            this.props.dreams && this.props.dreams.length > 0 ?
               this.state.listOfDreams.map(dream => <li key={dream.id}><Dream dreamData={dream} /></li>) :
               <div>No Dreams to show</div>;   

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

const mapStateToProps = state => {
    return {
        dreams: state.dreams,
        loading: state.loading,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDidMount: () => dispatch(actionCreator.dreams_fetching())
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(ListSection);
import React, { Component } from 'react';

import * as actionCreator from '../../store/actions/actionCreators';
import { connect } from 'react-redux';

import './list-section.scss';

import Dream from './dream';

class ListSection extends Component {

    componentDidMount() {
        this.props.onDidMount();
    };

    render() {
        const conditionalDreamsRendering = this.props.loading ? <p>Loading...</p> :
        this.props.error ? <p>{this.props.error}</p> :
            this.props.dreams && this.props.dreams.length > 0 ?
               this.props.dreams.map(dream => <li key={dream.id}><Dream dreamData={dream} /></li>) :
               <div>No dreams to show</div>;   
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
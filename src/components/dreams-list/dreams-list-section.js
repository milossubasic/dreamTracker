import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as actionCreator from '../../store/actions/dreams-reducer-actions/actionCreators';
import { connect } from 'react-redux';

import './dreams-list-section.scss';

import DreamListItem from './dreams-list-item';
import DreamsListHeader from './dreams-list-header';

class DreamsListSection extends Component {

    componentDidMount() {
        this.props.onDidMount();
    };

    render() {
        const conditionalDreamsRendering = this.props.loading ? <p>Loading...</p> :
        this.props.error ? 
            <p>{this.props.error}</p> :
            this.props.dreams && this.props.dreams.length > 0 ?
                    this.props.dreams.map(dream => <DreamListItem key={dream.id} dreamData={dream} />) :
                    <div>No dreams to show</div>;

        return (
            <section className='dreams-list-section'>
                <div className='container'>
                    <DreamsListHeader names={this.props.columnNames} />
                    <ul className='dreams-list-section__list'>
                        {conditionalDreamsRendering}
                    </ul>
                </div> 
            </section>
         );
    };
};

DreamsListSection.propTypes = {
    onDidMount: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    dreams: PropTypes.array.isRequired,
    columnNames: PropTypes.shape({
                    column1: PropTypes.string.isRequired,
                    column2: PropTypes.string.isRequired
                })
};

const mapStateToProps = state => {
    return {
        dreams: state.dreams.dreamsList,
        loading: state.dreams.loading,
        error: state.dreams.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDidMount: () => dispatch(actionCreator.dreams_fetching())
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(DreamsListSection);

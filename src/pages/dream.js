import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dreamPropType from '../helpers/dream-prop-type';

import DreamSection from '../components/dream/dream-section/dream-section';
import DreamNavigation from '../components/dream/dream-navigation/dream-navigation';

const Dream = ({ theDream }) => {
    return (
        <>
            <DreamSection dream={theDream}/>
            <DreamNavigation />
        </>
    );
};

const mapStateToProps = state => {
    return {
        theDream: state.activeDream
    }
};

Dream.propTypes = dreamPropType();

// Dream.propTypes = {
//     theDream: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         content: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         fullDate: PropTypes.shape({
//             date: PropTypes.number.isRequired,
//             day: PropTypes.string.isRequired,
//             month: PropTypes.number.isRequired
//         }),
//         title: PropTypes.string.isRequired
//     })
// }
 
export default connect(mapStateToProps)(Dream);

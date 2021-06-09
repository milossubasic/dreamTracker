import React from 'react';
import { connect } from 'react-redux';
import dreamPropType from '../helpers/dream-prop-type';

import DreamSection from '../components/dream/dream-section';

const Dream = ({ theDream }) => {
    return (
            <DreamSection theDream={theDream}/>
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

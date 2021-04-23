import PropTypes from 'prop-types';

const dreamPropType = () => {
    return ( 
         {
            theDream: PropTypes.shape({
                id: PropTypes.string.isRequired,
                content: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                fullDate: PropTypes.shape({
                    date: PropTypes.number.isRequired,
                    day: PropTypes.string.isRequired,
                    month: PropTypes.number.isRequired
                }),
                title: PropTypes.string.isRequired
            })
        }
     );
}
 
export default dreamPropType;
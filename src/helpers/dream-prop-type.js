import PropTypes from 'prop-types';

const dreamPropType = () => {
    return ( 
         {
            theDream: PropTypes.shape({
                id: PropTypes.string.isRequired,
                story: PropTypes.string.isRequired,
                summary: PropTypes.string.isRequired,
                date: PropTypes.shape({
                    year: PropTypes.number.isRequired,
                    month: PropTypes.number.isRequired,
                    date: PropTypes.number.isRequired,
                    day: PropTypes.string.isRequired
                }),
                title: PropTypes.string.isRequired
            })
        }
     );
}
 
export default dreamPropType;
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark; 
    return (
        <div className='bg-gray-200 m-4 p-5'>
            <h3>{title}</h3>
        </div>
    );
};


export default Bookmark;
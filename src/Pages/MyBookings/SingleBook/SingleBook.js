import React from 'react';

const SingleBook = ({ bookedService }) => {

    return (
        <div>
            {bookedService.service.name}
        </div>
    );
};

export default SingleBook;
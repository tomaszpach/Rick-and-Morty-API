import React from 'react';
import LoadingSpinner from "../shared/LoadingSpinner";

const CharacterDetails = ({loading, name, status, image}) => {
    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>Is alive: <b>{status}</b></p>
            <img src={image} alt={name} />
        </div>
    );
};

export default CharacterDetails;

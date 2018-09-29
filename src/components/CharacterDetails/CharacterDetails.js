import React from 'react';
import LoadingSpinner from "../shared/LoadingSpinner";

const CharacterDetails = ({loading, name, status, image}) => {
    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="character-card">
            <img src={image} alt={name} />
            <div className="details">
                <h2>{name}</h2>
                <p>Is alive: <b>{status}</b></p>
            </div>
        </div>
    );
};

export default CharacterDetails;

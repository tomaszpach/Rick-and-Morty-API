import React from 'react';
// import LoadingSpinner from "../shared/LoadingSpinner";

const CharacterDetails = ({loading, character}) => {
    if (loading) {
        // return <LoadingSpinner />
    }

    const { image, name, species, gender, status } = character;

    return (
        <div className="character-card">
            <img src={image} alt={name} />
            <div className="details">
                <h2>{name}</h2>
                <p>Species: <b>{species}</b></p>
                <p>Gender: <b>{gender}</b></p>
                <p>Is alive: <b>{status}</b></p>
            </div>
        </div>
    );
};

export default CharacterDetails;

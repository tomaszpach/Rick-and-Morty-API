import React from 'react';

import CharacterCard from './Homepage/CharacterCard/CharacterCard';
import FetchError from "./shared/FetchError";
import LoadingSpinner from "./shared/LoadingSpinner";

const CharactersCards = ({characters, error, loading}) => {
    if (error) {
       return <FetchError />
    } else if (loading) {
        return <LoadingSpinner />
    }
    return (
        characters.map(({name, image, species, gender, id}) => (
                <CharacterCard
                    name={name}
                    image={image}
                    species={species}
                    gender={gender}
                    key={id}
                />
            )
        )
    )
};

export default CharactersCards;

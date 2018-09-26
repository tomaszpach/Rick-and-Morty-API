import React from 'react';
import CharacterName from './CharacterName';
import CharacterImage from './CharacterImage';
import CharacterSpecies from "./CharacterSpecies";
import CharacterGender from "./CharacterGender";

const CharacterCard = ({name, image, species, gender}) => {
    return (
        <div className="character-card">
            <CharacterImage image={image} />
            <div className="details">
                <CharacterName name={name} />
                <CharacterSpecies species={species} />
                <CharacterGender gender={gender} />
            </div>
        </div>
    );
};

export default CharacterCard;

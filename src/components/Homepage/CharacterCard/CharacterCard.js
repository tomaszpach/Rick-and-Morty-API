import React from 'react';
import CharacterName from './CharacterName';
import CharacterImage from './CharacterImage';
import CharacterSpecies from "./CharacterSpecies";
import CharacterGender from "./CharacterGender";

const CharacterCard = ({name, image, species, gender, id}) => {
    const str = name.replace(/\s/g, '_');

    return (
        <a data-for={str + ' ' + id} href={`/character/${id}`}>
            <div className="character-card">
                <CharacterImage image={image} />
                <div className="details">
                    <CharacterName name={name} />
                    <CharacterSpecies species={species} />
                    <CharacterGender gender={gender} />
                </div>
            </div>
        </a>
    );
};

export default CharacterCard;

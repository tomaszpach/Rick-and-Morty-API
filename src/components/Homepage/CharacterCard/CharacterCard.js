import React from 'react';
import CharacterName from './CharacterName';
import CharacterImage from './CharacterImage';
import { Link } from 'react-router-dom';

const CharacterCard = ({name, image, species, gender, id}) => {
    const _name = name.replace(/\s/g, '_');

    return (
        <Link data-for={_name} data-id={id} to={`/character/${id}`}>
            <div className="character-card">
                <CharacterImage image={image} />
                <div className="details">
                    <CharacterName name={name} />
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;

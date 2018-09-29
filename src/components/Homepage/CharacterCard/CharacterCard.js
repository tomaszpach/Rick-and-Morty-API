import React from 'react';
import {Link} from 'react-router-dom';

import CharacterName from './CharacterName';
import CharacterImage from './CharacterImage';

import {ROOT_URL} from '../../../CONST';

const CharacterCard = ({name, image, species, gender, id}) => {
    const _name = name.replace(/\s/g, '_');

    return (
        <Link data-for={_name} data-id={id} to={`${ROOT_URL}character/${id}`}>
            <div className="character-card">
                <CharacterImage image={image} name={name}/>
                <div className="details">
                    <CharacterName name={name}/>
                </div>
            </div>
        </Link>
    );
};

export default CharacterCard;

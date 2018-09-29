import React, {Component} from 'react';

import RickAndMortyCharactersCards from '../../containers/RickAndMortyCharactersCards';

class CharactersCards extends Component {
    render() {
        return (
            <div className="characters-list">
                <RickAndMortyCharactersCards id={this.props.match.params.id} />
            </div>
        );
    }
}

export default CharactersCards;

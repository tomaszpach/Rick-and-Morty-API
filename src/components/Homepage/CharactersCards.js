import React, {Component} from 'react';
import '../../App.css';

import RickAndMortyCharactersCards from '../../containers/RickAndMortyCharactersCards';

class CharactersCards extends Component {
    render() {
        return (
            <div className="App">
                <RickAndMortyCharactersCards />
            </div>
        );
    }
}

export default CharactersCards;

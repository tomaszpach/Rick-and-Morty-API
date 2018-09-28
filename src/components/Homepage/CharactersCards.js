import React, {Component} from 'react';
import '../../App.css';

import RickAndMortyCharactersCards from '../../containers/RickAndMortyCharactersCards';

class CharactersCards extends Component {
    render() {
        return (
            <div className="App">
                <RickAndMortyCharactersCards id={this.props.match.params.id} />
            </div>
        );
    }
}

export default CharactersCards;

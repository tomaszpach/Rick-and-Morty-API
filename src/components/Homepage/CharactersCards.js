import React, {Component} from 'react';
import '../../App.css';

import RickAndMortyCharactersCards from '../../containers/RickAndMortyCharactersCards';
import HocEnhancedApp from "../HocTesting/HocEnhancedApp";

class CharactersCards extends Component {
    render() {
        return (
            <div className="App">
                <HocEnhancedApp backgroundColor="yellow" foo="bar" />
                <RickAndMortyCharactersCards id={this.props.match.params.id} />
            </div>
        );
    }
}

export default CharactersCards;

import React, {Component} from 'react';
import './App.css';

import RickAndMortyCharactersCards from './containers/RickAndMortyCharactersCards';

class App extends Component {
    render() {
        return (
            <div className="App">
                <RickAndMortyCharactersCards />
            </div>
        );
    }
}

export default App;
